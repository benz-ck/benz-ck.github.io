/* ─────────────────────────────────────────────────────────
   G-Class 구성 페이지 자료 (model.html?m=G-Class) — G 450 d · G 580 with EQ Technology · Mercedes-AMG G 63 (+ MANUFAKTUR)
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY27 G-Class 제품 정보 v4 (2026-09)
   - 사진 · 장비 설명: G-Class 카탈로그(2026-09-30, 27년식) · Mercedes-AMG G-Class · G-Class with EQ Technology 카탈로그(2026-04-24)
   - 제원: G 450 d 는 27년식 카탈로그 인증 제원 + MBK 자료(출력 · 가속 · 트렁크), G 580 은 EQ G 카탈로그(2025-01, EDITION ONE 인증) + 가이드 어프로치 북.
     AMG G 63 은 국내 카탈로그에 제원 쪽이 없어 "—"
   - 가격: 2026-10-27 공식 가격표(27년식 기본, 26년식은 alt)
   제품 정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만).
   사진은 images/cars/g-class/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["G-Class"] = (function(){
  var P = "images/cars/g-class/";
  return {
    name: "G-Class",
    badge: "27년식 The new G-Class · Mercedes-AMG G 63",
    tagline: "1979년부터 이어 온 오프로더의 기준.<br>디젤 · 전기 · AMG 와 MANUFAKTUR 까지 6트림.",
    asof: "MY27 G-Class 제품 정보 2026년 9월 · 카탈로그 2026년 9월",
    source: "MY27 G-Class 제품 정보(2026년 9월) · G-Class 카탈로그(2026년 9월, 27년식) · Mercedes-AMG G-Class · G-Class with EQ Technology 카탈로그(2026년 4월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg", P + "hero-6.jpg"],
    bodies: { D: "디젤", EV: "전기", AMG: "Mercedes-AMG" },
    extraRows: /^AMG G 63/,
    diffByBody: true,
    lines: { g450d: P + "line-g450d.jpg", g450dm: P + "line-g450dm.jpg", g580: P + "line-g580.jpg", g580m: P + "line-g580m.jpg", g63: P + "line-g63.jpg", g63m: P + "line-g63m.jpg" },

    trims: [
      { id:"g450d", name:"G 450 d", short:"G 450 d", body:"D", line:"기본형", price:199700000, row:"27|G 450 d", alt:["26|G 450 d"],
        engine:"om656", wheel:"r16", upholstery:"nappa", wood:"va1", imgNote:"G 450 d · 카탈로그 이미지",
        highlights:["직렬 6기통 디젤 367마력", "디퍼렌셜 락 3개 · 로우 레인지", "부메스터® 3D 서라운드"] },
      { id:"g450dm", name:"G 450 d MANUFAKTUR", short:"G 450 d MANUFAKTUR", body:"D", line:"MANUFAKTUR", price:228200000, row:"27|G 450 d MANUFAKTUR", alt:["26|G 450 d MANUFAKTUR"],
        engine:"om656", wheel:"r18", upholstery:"mfk", wood:"va1", imgNote:"G 450 d MANUFAKTUR · 나이트 패키지 · 카탈로그 이미지",
        highlights:["수페리어 라인 MANUFAKTUR 나파 가죽", "나이트 패키지 · 나이트 패키지 II", "MANUFAKTUR 외장 색상 15가지"] },
      { id:"g580", name:"G 580 with EQ Technology", short:"G 580", body:"EV", line:"기본형", price:219000000, row:"27|G 580 with EQ Technology", alt:["26|G 580 with EQ Technology"],
        engine:"eats", wheel:"rn7", upholstery:"nappa", wood:"va1", imgNote:"G 580 with EQ Technology · 카탈로그 이미지",
        highlights:["전기 모터 4개 587마력", "G-TURN · G-STEERING", "1회 충전 392km"] },
      { id:"g580m", name:"G 580 with EQ Technology MANUFAKTUR", short:"G 580 MANUFAKTUR", body:"EV", line:"MANUFAKTUR", price:238500000, row:"27|G 580 with EQ Technology MANUFAKTUR", alt:["26|G 580 with EQ Technology MANUFAKTUR"],
        engine:"eats", wheel:"rn8", upholstery:"mfk", wood:"va1", imgNote:"G 580 MANUFAKTUR 클래식 그레이 · 카탈로그 이미지",
        highlights:["수페리어 라인 MANUFAKTUR 나파 가죽", "MANUFAKTUR 클래식 그레이 기본", "20인치 하이 글로스 블랙 휠"] },
      { id:"g63", name:"Mercedes-AMG G 63", short:"AMG G 63", body:"AMG", line:"기본형", price:275000000, row:"27|AMG G 63", alt:["26|AMG G 63"],
        engine:"m177", wheel:"rg2", upholstery:"amg", wood:"zg2", imgNote:"Mercedes-AMG G 63 · 카탈로그 이미지",
        highlights:["AMG V8 바이터보", "AMG 액티브 라이드 컨트롤", "21인치 AMG 5트윈 스포크 휠"] },
      { id:"g63m", name:"Mercedes-AMG G 63 MANUFAKTUR", short:"AMG G 63 MANUFAKTUR", body:"AMG", line:"MANUFAKTUR", price:301000000, row:"27|AMG G 63 MANUFAKTUR", alt:["26|AMG G 63 MANUFAKTUR"],
        engine:"m177", wheel:"r19", upholstery:"mfk", wood:"va1", imgNote:"AMG G 63 MANUFAKTUR 클래식 그레이 · AMG 나이트 패키지 · 카탈로그 이미지",
        highlights:["수페리어 라인 MANUFAKTUR 나파 가죽", "AMG 나이트 패키지 · II", "22인치 AMG 멀티 스포크 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음. 고른 트림은 같은 파워트레인의 아래 트림과 비교(diffByBody) */
    features: [
      { g:"파워트레인 · 오프로드", rows:[
        ["엔진 · 모터", "직렬 6기통 디젤", "직렬 6기통 디젤", "전기 모터 4개", "전기 모터 4개", "AMG V8 바이터보", "AMG V8 바이터보"],
        ["변속기", "9G-TRONIC", "9G-TRONIC", "모터마다 2단 (로우 레인지)", "모터마다 2단 (로우 레인지)", "AMG SPEEDSHIFT TCT 9G", "AMG SPEEDSHIFT TCT 9G"],
        ["구동", "상시 사륜 · 디퍼렌셜 락 3개", "상시 사륜 · 디퍼렌셜 락 3개", "모터 4개 개별 구동 · 토크 벡터링", "모터 4개 개별 구동 · 토크 벡터링", "상시 사륜 · 디퍼렌셜 락 3개", "상시 사륜 · 디퍼렌셜 락 3개"],
        ["서스펜션", "어댑티브 서스펜션", "어댑티브 서스펜션", "어댑티브 서스펜션", "어댑티브 서스펜션", "AMG 액티브 라이드 컨트롤", "AMG 액티브 라이드 컨트롤"],
        ["G-TURN · G-STEERING · G-ROAR", "-", "-", "S", "S", "-", "-"],
        ["로우 레인지 · 오프로드 콕핏 · 투명 보닛", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["휠", "20인치 AMG 5트윈 스포크, 매트 블랙", "20인치 AMG 5트윈 스포크", "20인치 AMG 10 스포크", "20인치 AMG 10 스포크, 하이 글로스 블랙", "21인치 AMG 5트윈 스포크, 티타늄 그레이", "22인치 AMG 멀티 스포크, 티타늄 그레이"],
        ["나이트 패키지", "-", "나이트 패키지 · 나이트 패키지 II", "-", "-", "-", "AMG 나이트 패키지 · II"],
        ["뒷모습", "스페어 휠 링 커버, 스테인리스", "MANUFAKTUR 스페어 휠 링 커버, 차량 색", "디자인 박스", "디자인 박스", "스페어 휠 링 커버, 스테인리스", "MANUFAKTUR 스페어 휠 링 커버, 차량 색"],
        ["외장 색상", "8가지", "8가지 + MANUFAKTUR 15가지", "8가지", "7가지 + MANUFAKTUR 15가지", "8가지", "8가지 + MANUFAKTUR 15가지"],
        ["멀티빔 LED · 슬라이딩 선루프 · 러닝 보드 · 어반 가드 플러스", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "나파 가죽 (익스클루시브 라인)", "MANUFAKTUR 나파 가죽 (수페리어 라인)", "나파 가죽 (익스클루시브 라인)", "MANUFAKTUR 나파 가죽 (수페리어 라인)", "나파 가죽", "MANUFAKTUR 나파 가죽 (수페리어 라인)"],
        ["트림", "MANUFAKTUR 블랙 오픈 포어 우드", "MANUFAKTUR 블랙 오픈 포어 우드", "MANUFAKTUR 블랙 오픈 포어 우드", "MANUFAKTUR 블랙 오픈 포어 우드", "블랙 피아노 라커", "MANUFAKTUR 블랙 오픈 포어 우드"],
        ["스티어링 휠", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["앞 · 뒷좌석 열선 시트 · 앞좌석 메모리", "S", "S", "S", "S", "S", "S"],
        ["3존 자동 공조 · 앰비언트 라이트 (64색)", "S", "S", "S", "S", "S", "S"],
        ["컴포트 패키지 (키레스 고 · 앞좌석 무선 충전 · 온도 조절 컵홀더)", "S", "S", "S", "S", "S", "S"],
        ["열선 패키지 (열선 스티어링 휠 · 열선 윈드스크린)", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX", rows:[
        ["MBUX 증강현실 내비게이션 · 와이드 스크린 콕핏", "S", "S", "S", "S", "S", "S"],
        ["부메스터® 3D 서라운드 사운드", "S", "S", "S", "S", "S", "S"],
        ["드라이빙 어시스턴스 패키지 · 360° 카메라 · 액티브 주차 어시스트", "S", "S", "S", "S", "S", "S"],
        ["PRE-SAFE® 시스템 · 지문 스캐너 · 톨 정산 시스템", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "27년식 제품 정보 · 카탈로그 기준입니다. 트림 이름을 고르면 같은 파워트레인의 기본형과 비교합니다. MANUFAKTUR 트림은 수페리어 라인 인테리어와 MANUFAKTUR 나파 가죽(뱅갈 레드/블랙)이 기본이고 다른 가죽 색은 무료로 고를 수 있습니다.",

    engineNote: "G 450 d · AMG G 63 은 48V 마일드 하이브리드, G 580 은 바퀴마다 모터를 단 전기차입니다. 모두 사다리 프레임 위에 로우 레인지 · 오프로드 주행 프로그램을 갖춘 정통 오프로더입니다.",
    engines: {
      om656: { name:"OM 656 M", kind:"직렬 6기통 디젤 + 48V ISG", chips:["2,989cc", "367마력", "76.5kg·m"],
               desc:"2세대 통합 스타터 제너레이터(ISG)가 20마력을 보태 <b>0→100km/h 5.8초</b>. 복합연비 9.6km/ℓ (4등급)로 G-Class 중 가장 멀리 갑니다." },
      eats: { name:"eATS × 4", kind:"전기 모터 4개 · 배터리 118kWh", chips:["587마력", "118.7kg·m", "1회 충전 392km"],
              desc:"바퀴마다 모터와 2단 변속기가 달려 제자리에서 도는 <b>G-TURN</b>, 회전 반경을 줄이는 <b>G-STEERING</b>, 토크 벡터링을 씁니다. 최대 200kW 급속 충전." },
      m177: { name:"M 177", kind:"AMG 4.0리터 V8 바이터보 + 48V", chips:["V8 바이터보", "4.0리터", "48V 마일드 하이브리드"],
              desc:"실린더 헤드 사이에 트윈 스크롤 터보를 둔 AMG V8. 48V 온보드 전기 시스템이 반응과 효율을 다듬고, <b>AMG 액티브 라이드 컨트롤</b>이 온로드 · 오프로드를 모두 받칩니다." }
    },

    specs: { rows: [
      ["엔진 · 모터", "OM 656 M", "OM 656 M", "전기 모터 4개", "전기 모터 4개", "M 177", "M 177"],
      ["배기량 · 배터리", "2,989cc", "2,989cc", "118kWh", "118kWh", "4.0리터", "4.0리터"],
      ["최고출력", "367마력", "367마력", "587마력", "587마력", "—", "—"],
      ["최대토크", "76.5kg·m", "76.5kg·m", "118.7kg·m", "118.7kg·m", "—", "—"],
      ["0→100km/h", "5.8초", "5.8초", "4.7초", "4.7초", "—", "—"],
      ["최고속도", "210km/h", "210km/h", "180km/h", "180km/h", "—", "—"],
      ["복합 연비 · 전비", "9.6km/ℓ (4등급)", "9.6km/ℓ (4등급)", "3.0km/kWh", "3.0km/kWh", "—", "—"],
      ["도심 · 고속", "9.4 · 9.9km/ℓ", "9.4 · 9.9km/ℓ", "3.2 · 2.7km/kWh", "3.2 · 2.7km/kWh", "—", "—"],
      ["1회 충전 주행거리", "—", "—", "392km", "392km", "—", "—"],
      ["CO₂ 배출", "203g/km", "203g/km", "0g/km", "0g/km", "—", "—"],
      ["공차중량", "2,565kg", "2,565kg", "3,085kg", "3,085kg", "—", "—"],
      ["전장 · 전폭 · 전고", "4,865 · 1,985 · 1,980mm", "4,865 · 1,985 · 1,980mm", "4,865 · 1,985 · 1,990mm", "4,865 · 1,985 · 1,990mm", "—", "—"],
      ["휠베이스", "2,890mm", "2,890mm", "2,890mm", "2,890mm", "—", "—"],
      ["트렁크", "640~2,010ℓ", "640~2,010ℓ", "620~1,990ℓ", "620~1,990ℓ", "—", "—"],
      ["지상고 · 도강 깊이", "241mm · 700mm", "241mm · 700mm", "250mm · 850mm", "250mm · 850mm", "—", "—"]
    ] },
    specNote: "G 450 d 는 27년식 카탈로그 인증 제원(출력 · 가속 · 트렁크 · 지상고는 메르세데스-벤츠 코리아 자료), G 580 은 국내 카탈로그(EDITION ONE 인증)와 메르세데스-벤츠 코리아 자료 기준입니다. MANUFAKTUR 는 인증 제원이 따로 없어 같은 파워트레인 값을 적었습니다. Mercedes-AMG G 63 은 국내 카탈로그에 제원 쪽이 없어 공식 자료가 나오는 대로 채워 넣겠습니다. 트렁크는 기본 · 2열 접었을 때입니다.",

    wheels: {
      r16: { name:"20인치 AMG 5트윈 스포크 경량 알로이 휠, 매트 블랙", img:P + "wheel-r16.jpg" },
      r18: { name:"20인치 AMG 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r18.jpg" },
      rn7: { name:"20인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rn7.jpg" },
      rn8: { name:"20인치 AMG 10 스포크 경량 알로이 휠, 하이 글로스 블랙", img:P + "wheel-rn8.jpg" },
      rg2: { name:"21인치 AMG 5트윈 스포크 경량 알로이 휠, 티타늄 그레이", img:P + "wheel-rg2.jpg" },
      r19: { name:"22인치 AMG 멀티 스포크 경량 알로이 휠, 티타늄 그레이", img:P + "wheel-r19.jpg" }
    },
    upholstery: {
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"트러플 브라운/블랙", img:P + "seat-truffle.jpg" },
        { name:"마키아토 베이지/블랙", img:P + "seat-macchiato.jpg" } ]},
      amg: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"트러플 브라운/블랙", img:P + "seat-amg-truffle.jpg" },
        { name:"마키아토 베이지/블랙", img:P + "seat-amg-macchiato.jpg" } ]},
      mfk: { name:"수페리어 라인 나파 가죽", colors:[
        { name:"MANUFAKTUR 뱅갈 레드/블랙 (기본)", img:P + "seat-927.jpg" },
        { name:"MANUFAKTUR 플래티넘 화이트/블랙", img:P + "seat-923.jpg" },
        { name:"MANUFAKTUR 에스프레소 브라운/블랙", img:P + "seat-924.jpg" },
        { name:"MANUFAKTUR 카탈라나 베이지/블랙", img:P + "seat-925.jpg" },
        { name:"MANUFAKTUR 티타늄 그레이 펄/블랙", img:P + "seat-928.jpg" },
        { name:"MANUFAKTUR 새들 브라운/블랙", img:P + "seat-934.jpg" },
        { name:"MANUFAKTUR 레드 페퍼/블랙", img:P + "seat-937.jpg" },
        { name:"MANUFAKTUR 세이지 그레이/블랙", img:P + "seat-938.jpg" },
        { name:"블랙", img:P + "seat-801.jpg" },
        { name:"마키아토 베이지/마그마 그레이", img:P + "seat-808.jpg" },
        { name:"트러플 브라운/블랙", img:P + "seat-825.jpg" } ]}
    },
    woods: {
      va1: { name:"MANUFAKTUR 블랙 오픈 포어 우드 트림", img:P + "trim-va1.jpg" },
      zg2: { name:"블랙 피아노 라커 센터 콘솔 트림", img:P + "trim-zg2.jpg" },
      va2: { name:"오픈 포어 월넛 우드 트림", img:P + "trim-va2.jpg", note:"무료 선택" },
      va5: { name:"메탈 위브 트림", img:P + "trim-va5.jpg", note:"무료 선택" }
    },
    /* 기본 8가지(전 트림) + MANUFAKTUR 15가지(MANUFAKTUR 트림). 사진은 고른 파워트레인 카탈로그 것으로 */
    colors: (function(){
      function c(name, code, mfk){
        var o = { name:name, img:P + "color-" + code + ".jpg", lineImg:{ EV: P + "ev-" + code + ".jpg", AMG: P + "amg-" + code + ".jpg" } };
        if (mfk) { o.mfk = true; o.only = "MANUFAKTUR"; }
        return o;
      }
      return [
        c("옵시디안 블랙", "197u"), c("폴라 화이트 (G 580 MANUFAKTUR 제외)", "149u"), c("셀레나이트 그레이", "992u"), c("이리디움 실버", "775u"),
        c("모하비 실버", "859u"), c("소달라이트 블루", "842u"), c("브릴리언트 블루", "896u"), c("에메랄드 그린", "989u"),
        c("MANUFAKTUR 클래식 그레이 논-메탈릭", "124u", 1), c("MANUFAKTUR 그라파이트 메탈릭", "041u", 1), c("MANUFAKTUR 인디움 그레이 메탈릭", "963u", 1),
        c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", 1), c("MANUFAKTUR 트레벌타인 베이지 메탈릭", "693u", 1), c("MANUFAKTUR 데저트 샌드 논-메탈릭", "464u", 1),
        c("MANUFAKTUR 딥 그린 논-메탈릭", "825u", 1), c("MANUFAKTUR 올리브 메탈릭", "255u", 1), c("MANUFAKTUR 빈티지 블루 논-메탈릭", "934u", 1),
        c("MANUFAKTUR 다크 블루 논-메탈릭", "904u", 1), c("MANUFAKTUR 오션 블루 메탈릭", "026u", 1), c("MANUFAKTUR 사우스 씨 블루 메탈릭", "162u", 1),
        c("MANUFAKTUR 썬 옐로우 논-메탈릭", "914u", 1), c("MANUFAKTUR 루벨라이트 레드 메탈릭", "660u", 1), c("MANUFAKTUR 하이신스 레드 메탈릭", "996u", 1)
      ];
    })()
  };
})();
