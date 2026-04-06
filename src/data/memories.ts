import type { Album, BestMomentSection, Message, Photo, TimelineEntry } from '../types/content'

const photo = (
  id: string,
  src: string,
  alt: string,
  caption: string,
  width: number,
  height: number,
  extra?: Partial<Photo>,
): Photo => ({
  id,
  src,
  alt,
  caption,
  width,
  height,
  ...extra,
})

export const albums: Album[] = [
  {
    id: 'sports-day',
    title: '체육대회',
    date: '2025.05.17',
    description: '운동장 열기, 응원전, 반티, 이어달리기까지 하루 종일 웃음이 끊이지 않았던 날.',
    coverImage:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    location: '학교 운동장',
    accent: 'from-sky-300 via-cyan-200 to-blue-100',
    photos: [
      photo('sports-1', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80', '체육대회 단체 응원', '반티를 맞춰 입고 첫 경기 전에 남긴 단체 사진.', 1200, 900, { featured: true, tag: '올해의 단체사진' }),
      photo('sports-2', 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80', '응원도구를 든 학생들', '응원 연습보다 실전이 더 완벽했던 순간.', 900, 1200),
      photo('sports-3', 'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=900&q=80', '운동장 트랙 위 질주', '이어달리기 마지막 주자가 결승선으로 들어오던 장면.', 900, 600, { tag: '레전드 컷' }),
      photo('sports-4', 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80', '서로를 격려하는 친구들', '경기 후 다 같이 박수치며 서로를 축하했다.', 900, 1100),
    ],
  },
  {
    id: 'cherry-blossom',
    title: '벚꽃 앨범',
    date: '2025.04.08',
    description: '봄 햇살 아래에서 남긴 사진들을 모아 둔 앨범. 새 학기 공기와 벚꽃이 같이 남아 있다.',
    coverImage: './photos/firstClassPhoto/ClassPhoto.jpg',
    location: '학교 앞 벚꽃길',
    accent: 'from-pink-200 via-rose-100 to-sky-100',
    photos: [
      photo(
        'blossom-1',
        './photos/firstClassPhoto/ClassPhoto.jpg',
        '벚꽃 아래 첫 단체 사진',
        '벚꽃이 한창일 때 남긴 우리 반 첫 단체 사진.',
        1200,
        900,
        { featured: true, tag: '봄 기록' },
      ),
    ],
  },
  {
    id: 'festival',
    title: '축제',
    date: '2025.09.12',
    description: '부스 준비부터 무대 뒤 긴장감, 밤이 내려앉은 뒤의 조명까지 전부 특별했던 축제.',
    coverImage:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    location: '학교 강당 · 운동장',
    accent: 'from-blue-300 via-sky-200 to-cyan-100',
    photos: [
      photo('festival-1', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80', '무대 조명 아래 공연', '리허설 때보다 훨씬 더 멋졌던 본무대.', 1200, 850, { featured: true }),
      photo('festival-2', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80', '무대 뒤 대기', '공연 직전 긴장된 표정과 장난치는 모습이 같이 담겼다.', 900, 1200, { tag: '감동 사진' }),
      photo('festival-3', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80', '공연을 보는 학생들', '함성 소리가 강당을 가득 채웠던 시간.', 900, 600),
      photo('festival-4', 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80', '축제 부스 앞 친구들', '준비는 힘들었지만 끝나고 나니 가장 먼저 생각나는 날.', 900, 1100, { tag: '웃긴 사진' }),
    ],
  },
  {
    id: 'school-trip',
    title: '수학여행',
    date: '2025.10.21',
    description: '버스 안 노래, 숙소의 밤, 단체 일정 사이사이 생긴 자유 시간까지 모두가 사진이 된 여행.',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    location: '강원도',
    accent: 'from-sky-300 via-cyan-200 to-blue-100',
    photos: [
      photo('trip-1', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', '여행지 풍경과 반 친구들', '다 같이 같은 방향을 바라보던 고요한 순간.', 1200, 850, { featured: true, tag: '감동 사진' }),
      photo('trip-2', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', '바닷가 산책', '사진 찍자고 했더니 전원 동시에 뛰기 시작했다.', 900, 1200, { tag: '레전드 컷' }),
      photo('trip-3', 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80', '숙소 창밖 풍경', '여행 둘째 날 아침, 창문을 열자 보이던 풍경.', 900, 650),
      photo('trip-4', 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80', '버스 안 셀카', '이 사진 한 장으로 그날 분위기가 다 설명된다.', 900, 1120, { tag: '웃긴 사진' }),
    ],
  },
  {
    id: 'lunch-time',
    title: '급식시간',
    date: '2025.06.04',
    description: '메뉴가 좋았던 날도, 별로였던 날도 결국 가장 오래 남는 건 함께 먹던 분위기였다.',
    coverImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    location: '급식실',
    accent: 'from-amber-300 via-yellow-200 to-orange-100',
    photos: [
      photo('lunch-1', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', '트레이를 들고 웃는 친구들', '줄 서는 시간까지 수다로 가득했던 점심.', 1200, 850),
      photo('lunch-2', 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80', '간식 같은 디저트 메뉴', '그날은 급식실 분위기까지 더 밝아 보였다.', 900, 1200),
      photo('lunch-3', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80', '식판과 대화', '다 먹고도 자리에서 쉽게 못 일어났던 날.', 900, 600),
      photo('lunch-4', 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80', '디저트 자랑샷', '사진부터 찍고 먹는 건 모두 똑같았다.', 900, 1100),
    ],
  },
  {
    id: 'daily-life',
    title: '우리 반 일상',
    date: '2025.11.03',
    description: '가장 평범한 교실의 순간들이 지나고 나면 가장 선명한 추억이 된다.',
    coverImage:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    location: '3-1반 교실',
    accent: 'from-emerald-300 via-teal-200 to-cyan-100',
    photos: [
      photo('daily-1', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80', '교실에서 함께 웃는 학생들', '시험 끝난 날이라 교실 공기부터 달랐다.', 1200, 850, { featured: true }),
      photo('daily-2', 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80', '책상 위 필기와 노트', '열심히 살았던 흔적이 사진처럼 남았다.', 900, 1200),
      photo('daily-3', 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80', '창가 자리 오후 햇살', '아무 일 없던 오후인데 유난히 예뻤던 장면.', 900, 600),
      photo('daily-4', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80', '친구들의 교실 셀카', '매일 보는 얼굴인데도 사진은 다르게 기억된다.', 900, 1100),
    ],
  },
]

export const allPhotos = albums.flatMap((album) =>
  album.photos.map((item) => ({
    ...item,
    albumId: album.id,
    albumTitle: album.title,
  })),
)

export const featuredMemory = {
  title: '가장 오래 남을 하루',
  subtitle: '수학여행의 해질 무렵',
  description:
    '빠르게 지나가던 일정 사이에 모두가 잠깐 멈춰 서서 같은 풍경을 바라보던 순간. 사진 한 장인데도 그날의 공기와 웃음소리가 그대로 남아 있다.',
  image: allPhotos.find((item) => item.id === 'trip-1')!,
}

export const timelineEntries: TimelineEntry[] = [
  { month: '3월', title: '새 학기 첫 단체사진', description: '어색함과 기대가 같이 담긴 첫 교실 사진. 지금 보면 가장 풋풋한 장면.', photo: './photos/firstClassPhoto/ClassPhoto.jpg' },
  { month: '5월', title: '체육대회 응원전', description: '반마다 분위기가 달랐고, 우리 반은 가장 시끄럽고 가장 즐거웠다.', photo: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80' },
  { month: '6월', title: '급식실 베스트 메뉴 데이', description: '사진보다 대화가 더 많았던 점심시간. 그날따라 모두 오래 앉아 있었다.', photo: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80' },
  { month: '9월', title: '축제 무대와 부스', description: '준비는 힘들었지만 막상 시작되자 순식간에 지나간 하루.', photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' },
  { month: '10월', title: '수학여행', description: '버스 안 노래, 숙소의 밤, 바닷가 산책까지 전부 이어진 가장 긴 추억.', photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
  { month: '11월', title: '평범해서 더 소중한 교실 일상', description: '별일 없던 하루인데도 표정과 햇살만으로 오래 남는다.', photo: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80' },
]

export const messages: Message[] = [
  { id: 'm1', name: '김민서', role: '반장', text: '처음에는 다 어색했는데 어느새 가장 시끄럽고 가장 정든 반이 됐어. 우리 사진 많이 남겨둔 거 정말 잘한 일 같다.' },
  { id: 'm2', name: '박서준', role: '체육부장', text: '체육대회 이어달리기 전에 다 같이 소리 지르던 순간은 나중에도 바로 떠오를 것 같아.' },
  { id: 'm3', name: '이하윤', role: '축제 TF', text: '축제 준비는 힘들었지만 무대 끝나고 서로 안아주던 장면이 제일 기억나. 그날 진짜 빛났어.' },
  { id: 'm4', name: '정우진', role: '사진 담당', text: '웃긴 사진이 제일 많지만, 그래서 더 우리 반 같아. 꾸미지 않은 순간들이 더 좋더라.' },
  { id: 'm5', name: '최유나', role: '친구', text: '급식 먹고 교실 올라오는 길까지도 추억이라는 걸 이 홈페이지 만들면서 더 실감하게 될 것 같아.' },
  { id: 'm6', name: '한도윤', role: '여행 메이트', text: '수학여행 사진을 보면 그때 공기랑 냄새까지 생각나. 시간 지나도 계속 열어보게 될 것 같아.' },
]

export const bestMomentSections: BestMomentSection[] = [
  { id: 'group-shot', title: '올해의 단체사진', description: '같은 프레임 안에 우리 반 분위기가 가장 잘 담긴 장면.', photoIds: ['sports-1', 'festival-1', 'daily-1'] },
  { id: 'funny', title: '웃긴 사진', description: '계획 없이 찍혔는데 오히려 계속 보게 되는 컷들.', photoIds: ['festival-4', 'trip-4', 'lunch-4'] },
  { id: 'touching', title: '감동 사진', description: '시간이 지나면 더 크게 다가올 조용한 순간들.', photoIds: ['trip-1', 'festival-2', 'sports-4'] },
  { id: 'legend', title: '레전드 컷', description: '다들 인정할 만한 임팩트가 있는 장면들.', photoIds: ['sports-3', 'trip-2', 'festival-1'] },
]

export const quickStats = [
  { label: '기록된 사진', value: `${allPhotos.length}장` },
  { label: '추억 앨범', value: `${albums.length}개` },
  { label: '친구들의 메시지', value: `${messages.length}개` },
]
