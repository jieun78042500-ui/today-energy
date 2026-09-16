import type {SajuProfile} from './buildSajuProfile';
import type {Element} from './types';
export const dayMasterProfiles:Record<string,{summary:string;keywords:string[]}>={
 甲:{summary:'큰 나무처럼 방향을 세우고 성장하는 기운',keywords:['성장','책임','시작','꾸준함']},
 乙:{summary:'풀과 꽃처럼 유연하게 관계를 이어가는 기운',keywords:['유연함','적응','관계','섬세함']},
 丙:{summary:'햇빛처럼 주변에 온기를 나누는 기운',keywords:['표현','활력','따뜻함','추진력']},
 丁:{summary:'작은 등불처럼 한 곳을 깊이 비추는 기운',keywords:['집중','배려','통찰','온기']},
 戊:{summary:'산처럼 중심을 세우고 지켜가는 기운',keywords:['안정','신뢰','지속','중심']},
 己:{summary:'밭처럼 일상의 작은 변화를 돌보는 기운',keywords:['돌봄','실용','조율','성실']},
 庚:{summary:'금속처럼 기준을 세우고 실행하는 기운',keywords:['결단','실행','정직','정리']},
 辛:{summary:'보석처럼 세밀하게 다듬어가는 기운',keywords:['정교함','집중','기준','감각']},
 壬:{summary:'바다처럼 넓게 살피고 연결하는 기운',keywords:['탐구','포용','흐름','확장']},
 癸:{summary:'이슬처럼 작은 변화를 알아차리는 기운',keywords:['관찰','사색','유연함','세심함']}
};
const care:Record<Element,string>={목:'새로운 배움을 작게 시작하기',화:'고마운 마음을 말로 전하기',토:'식사와 휴식 시간을 일정하게 두기',금:'주변 공간 한 곳 정리하기',수:'잠시 멈추고 조용히 호흡하기'};
export function interpretSaju(p:SajuProfile){const base=p.dayMaster?dayMasterProfiles[p.dayMaster.hanja]:{summary:'출생시간을 확인하면 중심 기운을 알아볼 수 있어요',keywords:['관찰','기록','균형']};const strong=p.elementInsight.strongest,weak=p.elementInsight.weakest;const rest=care[weak[0]];const active=p.yinYang.yang>=60;const repeated=!!p.dayMaster&&strong.includes(p.dayMaster.element);const balance=active?'행동에 앞서 한 번 더 돌아보는 시간을 두어보세요.':p.yinYang.yin>=60?'생각한 내용을 작은 행동 하나로 옮겨보세요.':'움직임과 쉼을 번갈아 배치해보세요.';
 const condition=`${strong.join('·')}의 표면 비중이 높고 ${active?'양':p.yinYang.yin>=60?'음':'음양 균형'}의 구성이 함께 나타납니다.`;
 return {oneLineSummary:base.summary,keywords:base.keywords,personality:`${base.summary}에 비유해볼 수 있어요. ${condition} ${repeated?'자신의 방식에 힘을 싣되 다른 관점도 들어보세요.':balance}`,strengths:[`${base.keywords[0]}을 작은 목표에 활용하기`,`${base.keywords[1]}을 관계에서 살려보기`,`${base.keywords[2]}의 관점으로 일상을 기록하기`],cautions:['하나의 해석으로 나를 단정하지 않기',balance,`바쁜 날에도 ${rest}`],relationshipStyle:`${base.keywords[1]}을 대화에 활용해보세요. ${balance}`,loveFamilyStyle:`가까운 사이에도 원하는 도움을 물어보세요. ${care[weak[0]]}를 함께 해볼 수 있어요.`,workStudyStyle:`${base.keywords[0]}을 살릴 작은 목표 하나를 정해보세요. ${balance}`,moneyStyle:`지출 전 목적과 예산을 적어보세요. ${base.keywords[2]}을 점검 습관에 활용해볼 수 있어요.`,stressResponse:`${condition} 바쁜 날의 반응은 실제 경험을 기록하며 살펴보세요.`,recoveryStyle:`${rest}. ${balance}`,lifestyleRhythm:`한 번에 바꾸기보다 일정한 생활 시간 하나를 정해보세요. ${rest}부터 시작해도 좋아요.`,strongestElementInsight:`${strong.join('·')}의 비중이 상대적으로 높습니다. 글자의 분포이며 성격이나 실제 에너지의 세기를 뜻하지는 않아요.`,weakestElementInsight:`${weak.join('·')}의 비중이 상대적으로 낮습니다. ${rest}를 균형을 위한 생활 아이디어로 활용해보세요.`,yinYangInsight:`양 ${p.yinYang.yang}%, 음 ${p.yinYang.yin}%입니다. ${balance}`};}
