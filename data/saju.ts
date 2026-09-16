export const sajuKeywords=['따뜻함','추진력','표현력','관계','성장','책임감'];
export const sajuBalance=[{name:'목',han:'木',value:20,tone:'wood'},{name:'화',han:'火',value:30,tone:'fire'},{name:'토',han:'土',value:20,tone:'earth'},{name:'금',han:'金',value:15,tone:'metal'},{name:'수',han:'水',value:15,tone:'water'}];
export const sajuLife=[
{title:'나의 기본 성향',icon:'person',tone:'gold',lines:['따뜻하고 밝은 에너지로 사람들에게 좋은 영향을 주는 편이에요.','이상적인 것을 추구하며 의미 있는 삶을 살고자 합니다.']},
{title:'강점 3가지',icon:'star',tone:'gold',lines:['사람을 이끄는 리더십','긍정적이고 따뜻한 에너지','목표를 향한 꾸준한 추진력'],numbered:true},
{title:'조심하면 좋은 점 3가지',icon:'warning',tone:'gold',lines:['감정이 앞설 때의 즉흥적 판단','완벽을 추구하는 성향','과로로 인한 에너지 소모'],numbered:true},
{title:'인간관계 스타일',icon:'people',tone:'blue',lines:['처음엔 조심스럽지만 마음을 열면 깊고 진실한 관계를 맺어요.','믿을 수 있는 소수의 사람과 오래가는 인연을 중요하게 생각해요.']},
{title:'사랑·가족 관계 경향',icon:'heart',tone:'pink',lines:['진심을 다하는 사랑과 가족에게 든든한 마음을 전해요.','다만 감정이 깊어질 때는 표현의 균형도 살펴보세요.']},
{title:'일·공부 스타일',icon:'book',tone:'blue',lines:['관심 있는 분야에서는 높은 집중력과 지속력을 발휘해요.','의미와 보람을 느낄 수 있는 일을 할 때 가장 큰 만족을 느껴요.']},
{title:'돈을 대하는 방식',icon:'money',tone:'gold',lines:['돈은 더 나은 가치를 만드는 도구로 생각하는 편이에요.','계획적인 소비와 장기적인 목표를 함께 생각해보세요.']},
{title:'스트레스 받을 때의 나',icon:'cloud',tone:'blue',lines:['생각이 많아지고 혼자만의 시간이 필요해지기도 해요.','자연 속에서 걷거나 좋아하는 음악을 들으며 쉬어보세요.']},
{title:'나에게 맞는 휴식법',icon:'leaf',tone:'green',lines:['햇빛을 쬐며 산책하기','좋아하는 사람과 따뜻한 대화 나누기','잔잔한 음악과 차 한 잔의 시간']},
{title:'나에게 맞는 생활 리듬',icon:'moon',tone:'blue',lines:['아침에 가벼운 운동으로 하루를 시작하고, 낮에는 집중해보세요.','저녁에는 마음을 정리하는 시간을 가지는 것이 좋아요.']}
];
export const sajuPillarNames:Record<string,string>={'庚午':'경오','乙丑':'을축','丙寅':'병인','戊子':'무자'};
export const sitemapSections=[
{route:'/',name:'홈',sections:['오늘의 나 요약','오늘의 핵심 가이드','분야별 흐름','오늘의 실천 루프','나의 기록 미리보기']},
{route:'/today',name:'오늘의 나',sections:['오늘의 기본 정보','오늘의 기운 점수','오늘의 한 줄 요약','분야별 해석','행동 가이드','시간대별 흐름','내일의 기운 미리보기']},
{route:'/saju',name:'나의 사주',sections:['내 사주 한눈에 보기','나의 중심 기운, 일간','핵심 키워드','오행 구성','가장 강한 기운','보완이 필요한 기운','음양의 균형','생활 속의 나','오늘의 기운과 연결']},
{route:'/cheongan-jiji',name:'천간지지',sections:['천간이란?','지지란?','오행과 음양','천간지지 한눈에 보기','내 사주와 연결']},
{route:'/practice',name:'오늘 한 가지 실천',sections:['오늘의 실천 미션','체크하기','짧은 기록 남기기','연속 실천','주간 달성률']},
{route:'/quote',name:'오늘의 명언',sections:['오늘의 맞춤 명언','이 문장을 추천한 이유','저장하기·공유하기','최근의 명언','명언 카테고리']},
{route:'/exercise',name:'5분 운동',sections:['오늘 추천 운동','운동 부위 선택','5분 타이머','5개 운동 동작','완료 체크']},
{route:'/my-record',name:'나의 기록',sections:['이번 주 기록','실천 캘린더','최근 기운 기록','저장한 명언','최근 변화 요약']},
{route:'/mypage',name:'마이페이지',sections:['내 정보','생년월일·출생시간','알림 설정','데이터 관리']}
];
