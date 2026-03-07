# 3-1반 추억 홈페이지

사진 중심의 정적 클래스 메모리 사이트입니다. React + TypeScript + Vite + Tailwind CSS로 만들었고, GitHub Pages에 바로 배포할 수 있게 구성했습니다.

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons
- Framer Motion

## 설치

```bash
npm install
```

## 로컬 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 안내된 주소를 열면 됩니다.

## 빌드

```bash
npm run build
```

정적 결과물은 `dist/` 폴더에 생성됩니다.

## GitHub Pages 배포

1. GitHub에 이 프로젝트를 푸시합니다.
2. 처음 한 번은 저장소의 Pages 배포 브랜치를 `gh-pages`로 사용하도록 설정합니다.
3. 아래 명령으로 빌드 후 배포합니다.

```bash
npm run deploy
```

이 프로젝트는 `HashRouter`와 `base: './'` 설정을 사용하므로 GitHub Pages의 서브경로에서도 쉽게 동작합니다.

## 먼저 수정하면 좋은 파일

- `src/data/memories.ts`
  - 앨범, 사진, 타임라인, 메시지, 베스트 순간 데이터를 한 곳에서 수정할 수 있습니다.
- `src/pages/HomePage.tsx`
  - 첫 화면 문구와 대표 비주얼 구성을 바꾸기 좋습니다.
- `src/components/NavBar.tsx`
  - 메뉴 이름이나 상단 브랜딩을 바꾸기 좋습니다.
- `src/index.css`
  - 폰트, 전체 분위기, 공통 스타일을 조정할 수 있습니다.

## 사진과 문구 교체 방법

현재 샘플 사진은 외부 플레이스홀더 이미지 URL을 사용합니다. 나중에 실제 사진으로 바꾸려면:

1. 원하는 이미지를 `public/` 폴더나 별도 이미지 폴더에 넣습니다.
2. `src/data/memories.ts`에서 각 `src` 값을 새 파일 경로로 바꿉니다.
3. `alt`, `caption`, `date`, `description`, `message` 텍스트도 같은 파일에서 함께 수정합니다.

예시:

```ts
src: './photos/sports-day/team-photo.jpg'
```

## 폴더 구조

```text
src/
  components/   재사용 UI 컴포넌트
  data/         편집 가능한 샘플 데이터
  pages/        라우트 단위 페이지
  types/        데이터 타입 정의
  utils/        간단한 포맷 함수
```

## 참고

- 이 프로젝트는 백엔드 없이 완전히 정적으로 동작합니다.
- 로그인, 서버, 데이터베이스가 필요 없습니다.
- 사진이 많아져도 구조를 쉽게 확장할 수 있도록 데이터 중심으로 구성했습니다.
