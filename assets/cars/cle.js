/* ─────────────────────────────────────────────────────────
   CLE 구성 페이지 자료 (model.html?m=CLE)
   - 트림 구성 · 사양 비교: MY27 CLE Coupe & Cabriolet 제품정보 v1 (2026-08, Specification · Product line-up)
   - 연비 · CO₂ · 중량 · 크기, 사진 · 휠 · 시트 · 트림 · 색상: CLE Coupé & Cabriolet 카탈로그(2026-09-21, 27년식)
     · AMG CLE Coupé / Cabriolet 카탈로그(2026-09-21)
   - 최고출력 · 토크 · 최고속도: 어프로치 북 / 0→100km/h · 트렁크: 사이트 모델 창(MODEL_INFO)과 같은 값
   - 가격: 2026-10-20 공식 가격표
   제품정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 패키지 옵션가는 싣지 않는다(사양 이름만).
   사진은 images/cars/cle/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["CLE"] = (function(){
  var P = "images/cars/cle/";
  return {
    name: "CLE",
    badge: "27년식 CLE Coupé · CLE Cabriolet",
    tagline: "2도어 쿠페와 오픈톱 카브리올레.<br>CLE 200 · 450 · AMG CLE 53 을 차체별로 한눈에.",
    asof: "MY27 CLE 제품정보 2026년 8월 · 카탈로그 2026년 9월",
    source: "MY27 CLE Coupe & Cabriolet 제품정보(2026년 8월) · CLE Coupé & Cabriolet 카탈로그(2026년 9월, 27년식) · AMG CLE 카탈로그(2026년 9월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { COUPE: "쿠페", CAB: "카브리올레" },
    diffByBody: true,
    lines: { "AMG Line|COUPE": P + "line-coupe.jpg", "AMG Line|CAB": P + "line-cab.jpg",
             "Mercedes-AMG|COUPE": P + "line-53-coupe.jpg", "Mercedes-AMG|CAB": P + "line-53-cab.jpg" },

    /* 쿠페 3 · 카브리올레 3 — 「달라지는 사양」은 같은 차체의 바로 아래 트림과 비교 */
    trims: [
      { id:"c200", name:"CLE 200 Coupé", short:"CLE 200 쿠페", body:"COUPE", line:"AMG Line", price:77600000, row:"27|CLE 200 Coupé", alt:["26|CLE 200 Coupé"],
        engine:"m254", wheel:"rva", upholstery:"artico", wood:"h64", highlights:["디지털 라이트", "통풍 시트", "360° 카메라 주차 패키지"] },
      { id:"c450", name:"CLE 450 4MATIC Coupé", short:"CLE 450 4M 쿠페", body:"COUPE", line:"AMG Line", price:100800000, row:"27|CLE 450 Coupé", alt:["26|CLE 450 4M Coupé"],
        engine:"m256", wheel:"rvm", upholstery:"leather", wood:"h04", highlights:["헤드업 디스플레이", "앞좌석 멀티컨투어 시트", "리어 액슬 스티어링"] },
      { id:"c53", name:"Mercedes-AMG CLE 53 4MATIC+ Coupé", short:"AMG CLE 53 쿠페", body:"COUPE", line:"Mercedes-AMG", price:110600000, row:"27|AMG CLE 53 4M+ Coupé", alt:["26|AMG CLE 53 4M+ Coupé"],
        engine:"amg53", wheel:"rtm", upholstery:"amgnappa", wood:"h64", highlights:["AMG 라이드 컨트롤 서스펜션", "AMG 퍼포먼스 사운드", "부메스터® 3D 사운드"] },
      { id:"b200", name:"CLE 200 Cabriolet", short:"CLE 200 카브리올레", body:"CAB", line:"AMG Line", price:84100000, row:"27|CLE 200 Cabriolet", alt:["26|CLE 200 Cabriolet"],
        engine:"m254", wheel:"rva", upholstery:"artico", wood:"h64", highlights:["카브리올레 컴포트 패키지", "디지털 라이트", "통풍 시트"] },
      { id:"b450", name:"CLE 450 4MATIC Cabriolet", short:"CLE 450 4M 카브리올레", body:"CAB", line:"AMG Line", price:105200000, row:"27|CLE 450 4M Cabriolet", alt:["26|CLE 450 4M Cabriolet"],
        engine:"m256", wheel:"rvm", upholstery:"leather", wood:"h04", highlights:["헤드업 디스플레이", "앞좌석 멀티컨투어 시트", "에어 밸런스 패키지"] },
      { id:"b53", name:"Mercedes-AMG CLE 53 4MATIC+ Cabriolet", short:"AMG CLE 53 카브리올레", body:"CAB", line:"Mercedes-AMG", price:116600000, row:"27|AMG CLE 53 4M+ Cabriolet", alt:["26|AMG CLE 53 4M+ Cabriolet"],
        engine:"amg53", wheel:"rtm", upholstery:"amgnappa", wood:"h64", highlights:["AMG 라이드 컨트롤 서스펜션", "리어 액슬 스티어링", "카브리올레 컴포트 패키지"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (27년식 제품정보 Specification) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린", "6기통 가솔린", "6기통 가솔린 (AMG)", "4기통 가솔린", "6기통 가솔린", "6기통 가솔린 (AMG)"],
        ["구동", "후륜구동", "4MATIC", "AMG 4MATIC+", "후륜구동", "4MATIC", "AMG 4MATIC+"],
        ["변속기", "9G-TRONIC", "9G-TRONIC", "AMG SPEEDSHIFT TCT 9G", "9G-TRONIC", "9G-TRONIC", "AMG SPEEDSHIFT TCT 9G"],
        ["서스펜션", "스포츠", "다이내믹 바디 컨트롤", "AMG 라이드 컨트롤", "스포츠", "다이내믹 바디 컨트롤", "AMG 라이드 컨트롤"],
        ["리어 액슬 스티어링", "-", "2.5°", "2.5°", "-", "-", "2.5°"],
        ["배기 사운드", "스포츠 엔진 사운드", "스포츠 엔진 사운드", "AMG 퍼포먼스 사운드", "스포츠 엔진 사운드", "스포츠 엔진 사운드", "AMG 퍼포먼스 사운드"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AMG Line", "AMG Line", "Mercedes-AMG", "AMG Line", "AMG Line", "Mercedes-AMG"],
        ["휠", "19인치 AMG 멀티 스포크", "20인치 AMG 멀티 스포크", "20인치 AMG Y 스포크", "19인치 AMG 멀티 스포크", "20인치 AMG 멀티 스포크", "20인치 AMG Y 스포크"],
        ["지붕", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "패브릭 소프트탑", "패브릭 소프트탑", "패브릭 소프트탑"],
        ["소프트탑 색상", "-", "-", "-", "블랙 · 레드 · 그레이", "블랙 · 레드 · 그레이", "블랙 · 레드 · 그레이"],
        ["카브리올레 컴포트 패키지 (에어캡 · 에어스카프)", "-", "-", "-", "S", "S", "S"],
        ["스페어 타이어", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏"]
      ]},
      { g:"라이트", rows:[
        ["헤드램프", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트"],
        ["상향등 어시스트 · 로고 프로젝터 · 앰비언트 라이트", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "ARTICO 가죽", "가죽", "AMG 나파 가죽", "ARTICO 가죽", "가죽", "AMG 나파 가죽"],
        ["트림", "메탈 스트럭처", "블랙 오픈포어 알루미늄 라인 우드", "메탈 스트럭처", "메탈 스트럭처", "블랙 오픈포어 알루미늄 라인 우드", "메탈 스트럭처"],
        ["스티어링 휠", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["앞좌석 멀티컨투어 시트", "-", "S", "S", "-", "S", "S"],
        ["열선 스티어링 휠 · ARTICO 대시보드", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 · 앞좌석 열선 · 통풍 시트", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 접이식 시트", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전", rows:[
        ["MB.DRIVE 어시스트 · 브레이크 · 차선 이탈 방지 · 사각지대 어시스트", "S", "S", "S", "S", "S", "S"],
        ["PRE-SAFE® · 임펄스 사이드", "S", "S", "S", "S", "S", "S"],
        ["360° 카메라 주차 패키지 · 파크트로닉", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"MBUX · 인포테인먼트", rows:[
        ["3세대 MBUX · 내비게이션 · 스마트폰 통합 · 앞좌석 무선 충전", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이", "-", "S", "S", "-", "S", "S"],
        ["사운드 시스템", "기본", "부메스터® 서라운드", "부메스터® 3D 서라운드", "기본", "부메스터® 서라운드", "부메스터® 3D 서라운드"]
      ]},
      { g:"편의", rows:[
        ["키레스 고 · 핸즈프리 액세스", "S", "S", "S", "S", "S", "S"],
        ["전동 트렁크", "S", "S", "S", "-", "-", "-"],
        ["에어 밸런스 패키지", "-", "S", "S", "-", "S", "S"],
        ["공기 청정 패키지", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "CLE 200 은 헤드업 디스플레이 · 부메스터® 3D 사운드를 묶은 패키지 옵션, AMG CLE 53 은 나이트 · 퍼포먼스 시트 · 단조 휠 패키지 옵션을 고를 수 있습니다. 옵션 가격은 문의 주세요.",

    engineNote: "CLE 200 · 450 에는 48V 마일드 하이브리드(통합형 스타터 제너레이터)가 들어가 출발 · 가속을 거들고 연료를 아낍니다. AMG CLE 53 은 전기 부스터 컴프레서까지 더한 AMG 6기통입니다.",
    engines: {
      m254: { name:"M 254", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,999cc", "204마력", "후륜구동"],
              desc:"CLE 200 의 엔진. <b>복합연비 쿠페 11.7km/ℓ (3등급)</b>로 CLE 에서 가장 효율적이고, 후륜구동 특유의 경쾌한 핸들링이 살아 있습니다." },
      m256: { name:"M 256 M", kind:"직렬 6기통 가솔린 + 48V 마일드 하이브리드", chips:["2,998cc", "381마력", "4MATIC"],
              desc:"CLE 450 의 엔진. 381마력 · <b>0→100km/h 4.4초</b>로 AMG 가 아니어도 충분히 빠르고, 연비도 10.9km/ℓ(쿠페)입니다." },
      amg53: { name:"M 256 M (AMG)", kind:"AMG 직렬 6기통 + 전기 부스터 컴프레서 + ISG", chips:["2,998cc", "AMG SPEEDSHIFT TCT 9G", "4MATIC+"],
              desc:"전기 부스터 컴프레서가 <b>낮은 회전수에서도 높은 토크</b>를 내고, 통합형 스타터 제너레이터가 마일드 하이브리드로 힘을 보탭니다(카탈로그)." }
    },

    specs: { rows: [
      ["엔진", "M 254", "M 256 M", "M 256 M (AMG)", "M 254", "M 256 M", "M 256 M (AMG)"],
      ["배기량", "1,999cc", "2,998cc", "2,998cc", "1,999cc", "2,998cc", "2,998cc"],
      ["최고출력", "204마력", "381마력", "—", "204마력", "381마력", "—"],
      ["최대토크", "32.6kg·m", "51.0kg·m", "—", "32.6kg·m", "51.0kg·m", "—"],
      ["0→100km/h", "7.4초", "4.4초", "—", "7.4초", "4.4초", "—"],
      ["최고속도", "240km/h", "250km/h", "—", "240km/h", "250km/h", "—"],
      ["구동 · 변속기", "후륜 · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC+ · AMG TCT 9G", "후륜 · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC+ · AMG TCT 9G"],
      ["복합연비 (등급)", "11.7km/ℓ (3등급)", "10.9km/ℓ (4등급)", "9.6km/ℓ (4등급)", "11.2km/ℓ (4등급)", "10.7km/ℓ (4등급)", "9.1km/ℓ (5등급)"],
      ["도심 · 고속 연비", "10.3 · 14.0km/ℓ", "9.4 · 13.6km/ℓ", "8.3 · 11.9km/ℓ", "9.5 · 14.3km/ℓ", "9.2 · 13.4km/ℓ", "8.0 · 10.9km/ℓ"],
      ["CO₂ 배출", "143g/km", "155g/km", "179g/km", "150g/km", "158g/km", "188g/km"],
      ["공차중량", "1,765kg", "1,935kg", "1,965kg", "1,875kg", "2,025kg", "2,070kg"],
      ["전장 · 전폭 · 전고", "4,850 · 1,860 · 1,420mm", "4,850 · 1,860 · 1,420mm", "4,855 · 1,935 · 1,435mm", "4,850 · 1,860 · 1,430mm", "4,850 · 1,860 · 1,430mm", "4,855 · 1,935 · 1,435mm"],
      ["트렁크", "420ℓ", "420ℓ", "—", "295~385ℓ", "295~385ℓ", "—"]
    ] },
    specNote: "연비 · CO₂ · 중량 · 크기 · 배기량은 27년식 카탈로그의 인증 차량 제원, 최고출력 · 토크 · 최고속도는 어프로치 북 기준입니다. AMG CLE 53 의 출력 · 가속은 공식 자료가 나오는 대로 채워 넣겠습니다.",

    wheels: {
      rva: { name:"19인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rva.jpg" },
      rvm: { name:"20인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rvm.jpg" },
      rtm: { name:"20인치 AMG Y 스포크 경량 알로이 휠", img:P + "wheel-rtm.jpg" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-artico-black.jpg" },
        { name:"통카 브라운 / 블랙", img:P + "seat-artico-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-artico-beige.jpg" } ]},
      leather: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-black.jpg" },
        { name:"새들 브라운 / 블랙", img:P + "seat-leather-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-leather-beige.jpg" },
        { name:"파워 레드 / 블랙", img:P + "seat-leather-red.jpg" } ]},
      amgnappa: { name:"AMG 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"투톤 파워 레드 / 블랙", img:P + "seat-amg-red.jpg" } ]}
    },
    woods: {
      h64: { name:"메탈 스트럭처 트림", img:P + "wood-h64.jpg" },
      h04: { name:"블랙 오픈포어 알루미늄 라인 우드 트림", img:P + "wood-h04.jpg" }
    },
    /* 카탈로그 「Colours」 10가지 — 카브리올레 · AMG 를 고르면 그 차 사진. AMG CLE 53 은 7가지 */
    colors: (function(){
      function c(name, code, mfk, noAmg){
        var o = { name:name, img:P + "coupe-" + code + ".jpg",
          lineImg:{ "CAB": P + "cab-" + code + ".jpg", "Mercedes-AMG|COUPE": P + "amgcoupe-" + code + ".jpg", "Mercedes-AMG|CAB": P + "amgcab-" + code + ".jpg" } };
        if (mfk) o.mfk = true;
        if (noAmg) { o.not = "Mercedes-AMG"; delete o.lineImg["Mercedes-AMG|COUPE"]; delete o.lineImg["Mercedes-AMG|CAB"]; }
        return o;
      }
      return [
        c("폴라 화이트", "149u", false, true), c("옵시디안 블랙", "197u"), c("그라파이트 그레이", "831u", false, true),
        c("썬 옐로우", "914u"), c("하이 테크 실버", "922u", false, true), c("스펙트럴 블루", "970u"),
        c("MANUFAKTUR 그라파이트 그레이 마그노", "818u", true), c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", true),
        c("MANUFAKTUR 알파인 그레이", "956u", true), c("MANUFAKTUR 파타고니아 레드 브라이트", "993u", true)
      ];
    })()
  };
})();
