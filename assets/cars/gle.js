/* ─────────────────────────────────────────────────────────
   GLE 구성 페이지 자료 (model.html?m=GLE)
   - 트림 구성 · 시트 · 트림 · 휠: MY26 GLE / GLE Coupé Order Guideline (2025-11). 27년식 GLE 는 아직 자료가 없다
   - 사양 · 연비 · CO₂ · 중량 · 크기, 사진: GLE & GLE Coupé 카탈로그(2026-06-19, 26년식)
   - 최고출력 · 0→100km/h · 트렁크 · 휠베이스: 사이트 모델 창(MODEL_INFO)과 같은 값
   - AMG GLE 53 은 카탈로그가 없어 가격 · 휠 · 시트 · 트림만 싣는다(제원은 —)
   - 가격: 2026-10-20 공식 가격표(26년식)
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/gle/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLE"] = (function(){
  var P = "images/cars/gle/";
  var AMGNOTE = "GLE 카탈로그 이미지 · AMG GLE 53 사진은 준비 중";
  return {
    name: "GLE",
    badge: "26년식 GLE · GLE Coupé",
    tagline: "여유로운 공간과 존재감의 패밀리 SUV.<br>SUV 5트림과 쿠페 3트림을 한눈에.",
    asof: "MY26 GLE · GLE Coupé 오더 가이드라인 2025년 11월 · 카탈로그 2026년 6월",
    source: "MY26 GLE · GLE Coupé 오더 가이드라인(2025년 11월) · GLE & GLE Coupé 카탈로그(2026년 6월, 26년식) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { SUV: "SUV", COUPE: "쿠페" },
    diffByBody: true,
    lines: { "MB 스타일링|SUV": P + "line-std.jpg", "AMG Line|SUV": P + "line-amg.jpg", "AMG Line|COUPE": P + "line-coupe.jpg" },

    trims: [
      { id:"gle350",  name:"GLE 350 4MATIC",        short:"GLE 350 4M",        body:"SUV", line:"MB 스타일링", price:118000000, row:"26|GLE 350 4M",
        engine:"m254", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["에어매틱 패키지", "부메스터® 서라운드 사운드", "헤드업 디스플레이"] },
      { id:"gle300d", name:"GLE 300 d 4MATIC",      short:"GLE 300 d 4M",      body:"SUV", line:"MB 스타일링", price:119200000, row:"26|GLE 300 d 4M",
        engine:"om654", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["디젤 복합연비 11.6km/ℓ", "에어매틱 패키지", "에너자이징 패키지"] },
      { id:"gle450",  name:"GLE 450 4MATIC",        short:"GLE 450 4M",        body:"SUV", line:"MB 스타일링", price:129000000, row:"26|GLE 450 4M",
        engine:"m256", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["직렬 6기통 381마력", "에어매틱 패키지", "부메스터® 서라운드 사운드"] },
      { id:"gle450amg", name:"GLE 450 4MATIC AMG Line", short:"GLE 450 4M AMG Line", body:"SUV", line:"AMG Line", price:139000000, row:"26|GLE 450 4M AMG Line",
        engine:"m256", wheel:"rwa", upholstery:"nappa", wood:"h31", highlights:["나이트 패키지", "나파 가죽 시트 · 대시보드", "우드 · 가죽 스티어링 휠"] },
      { id:"gle53",   name:"Mercedes-AMG GLE 53 4MATIC+", short:"AMG GLE 53",  body:"SUV", line:"Mercedes-AMG", price:166000000, row:"26|AMG GLE 53 4M+", imgNote:AMGNOTE,
        engine:"amg53", wheel:"rpg", upholstery:"amgnappa", wood:"h86", highlights:["22인치 AMG 휠", "AMG 나파 가죽", "AMG 카본파이버 트림"] },
      { id:"glec450d", name:"GLE 450 d 4MATIC Coupé AMG Line", short:"Coupé 450 d 4M", body:"COUPE", line:"AMG Line", price:134000000, row:"26|GLE 450 d 4M Coupé",
        engine:"om656", wheel:"rzv", upholstery:"articoCoupe", wood:"04h", highlights:["직렬 6기통 디젤 367마력", "AMG Line 익스테리어", "20인치 AMG 휠"] },
      { id:"glec450", name:"GLE 450 4MATIC Coupé AMG Line", short:"Coupé 450 4M", body:"COUPE", line:"AMG Line", price:142500000, row:"26|GLE 450 4M AMG Line Coupé", alt:["26|GLE 450 4M Coupé"],
        engine:"m256", wheel:"rwa", upholstery:"nappa", wood:"h31", highlights:["나이트 패키지", "나파 가죽 시트 · 대시보드", "21인치 AMG 휠"] },
      { id:"glec53",  name:"Mercedes-AMG GLE 53 4MATIC+ Coupé", short:"AMG GLE 53 Coupé", body:"COUPE", line:"Mercedes-AMG", price:170000000, row:"26|AMG GLE 53 4M+ Coupé", imgNote:AMGNOTE,
        engine:"amg53", wheel:"rpg", upholstery:"amgnappa", wood:"h86", highlights:["22인치 AMG 휠", "AMG 나파 가죽", "AMG 카본파이버 트림"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 · "문의" 자료에 없음 */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린", "4기통 디젤", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린 (AMG)", "6기통 디젤", "6기통 가솔린", "6기통 가솔린 (AMG)"],
        ["구동", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC+", "4MATIC", "4MATIC", "4MATIC+"],
        ["변속기", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동"],
        ["서스펜션", "에어매틱 패키지", "에어매틱 패키지", "에어매틱 패키지", "에어매틱 패키지", "AMG 전용", "에어매틱 패키지", "에어매틱 패키지", "AMG 전용"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "MB 스타일링", "MB 스타일링", "MB 스타일링", "AMG Line", "Mercedes-AMG", "AMG Line", "AMG Line", "Mercedes-AMG"],
        ["휠", "20인치 5 트윈 스포크", "20인치 5 트윈 스포크", "20인치 5 트윈 스포크", "21인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크", "20인치 AMG 5 트윈 스포크", "21인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크"],
        ["나이트 패키지", "-", "-", "-", "S", "문의", "-", "S", "문의"],
        ["리어 스포일러", "-", "-", "-", "-", "-", "S", "S", "S"],
        ["멀티빔 LED · 파노라믹 선루프 · 알루미늄 러닝보드", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["키레스 고 · 파워 클로징 · 미러 패키지", "S", "S", "S", "S", "문의", "S", "S", "문의"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "나파 가죽", "AMG 나파 가죽", "ARTICO 가죽", "나파 가죽", "AMG 나파 가죽"],
        ["대시보드 · 벨트라인", "ARTICO", "ARTICO", "ARTICO", "나파 가죽", "문의", "문의", "나파 가죽", "문의"],
        ["트림", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "AMG 카본파이버", "하이 글로스 브라운 라인스트럭처 라임 우드", "앤트러사이트 오픈 포어 오크 우드", "AMG 카본파이버"],
        ["스티어링 휠", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능, 우드 · 가죽", "AMG", "다기능, 나파 가죽", "다기능, 우드 · 가죽", "AMG"],
        ["앞좌석 열선 · 통풍 시트 · 메모리", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 · 앰비언트 라이트 · 온도 조절 컵홀더", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["드라이빙 어시스턴스 패키지", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["360° 카메라 · 투명 보닛", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이 · MBUX 증강현실 내비게이션", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["부메스터® 서라운드 사운드", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["에너자이징 패키지 · 앞좌석 무선 충전", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "26년식 오더 가이드라인 · 카탈로그 기준입니다. AMG GLE 53 은 카탈로그가 없어 자료에 없는 칸을 「문의」로 두었습니다. 26년식은 MANUFAKTUR 외장 색상 선택이 끝났습니다(1월 생산분부터).",

    engineNote: "48V EQ 부스트(2세대 통합 스타터 제너레이터)가 최대 15kW 의 추가 출력과 200Nm 의 추가 토크로 엔진을 거듭니다(카탈로그). 전 트림 사륜구동 · 9단 자동변속기.",
    engines: {
      m254: { name:"M 254", kind:"직렬 4기통 가솔린 + 48V EQ 부스트", chips:["1,999cc", "258마력", "0→100 7.5초"],
              desc:"GLE 350 의 엔진. 같은 4기통이지만 EQ 부스트가 출발 · 가속을 거들어 큰 차체에서도 답답하지 않습니다." },
      om654: { name:"OM 654 M", kind:"직렬 4기통 디젤", chips:["1,993cc", "269마력", "11.6km/ℓ"],
              desc:"GLE 에서 <b>연비가 가장 좋은</b> 엔진입니다. 복합연비 11.6km/ℓ (3등급) — 장거리 · 캠핑이 많으시면 이쪽입니다." },
      m256: { name:"M 256", kind:"직렬 6기통 가솔린 + 48V EQ 부스트", chips:["2,998cc", "381마력", "0→100 5.6초"],
              desc:"GLE 450 · GLE 450 쿠페의 엔진. <b>6기통의 부드러움과 넉넉한 힘</b>을 원하시면 이 엔진입니다." },
      om656: { name:"OM 656", kind:"직렬 6기통 디젤", chips:["2,989cc", "367마력", "11.0km/ℓ"],
              desc:"GLE 450 d 쿠페의 엔진. 6기통 디젤의 큰 토크에 <b>복합연비 11.0km/ℓ (4등급)</b>로, 힘과 연비를 함께 챙깁니다." },
      amg53: { name:"AMG 53", kind:"AMG 직렬 6기통 가솔린", chips:["AMG 4MATIC+"],
              desc:"AMG GLE 53 · AMG GLE 53 쿠페의 엔진. 출력 · 연비는 공식 자료가 나오는 대로 채워 넣겠습니다." }
    },

    specs: { rows: [
      ["엔진", "M 254", "OM 654", "M 256", "M 256", "—", "OM 656", "M 256", "—"],
      ["배기량", "1,999cc", "1,993cc", "2,998cc", "2,998cc", "—", "2,989cc", "2,998cc", "—"],
      ["최고출력", "258마력", "269마력", "381마력", "381마력", "—", "367마력", "381마력", "—"],
      ["0→100km/h", "7.5초", "6.9초", "5.6초", "5.6초", "—", "5.6초", "5.6초", "—"],
      ["복합연비 (등급)", "8.6km/ℓ (5등급)", "11.6km/ℓ (3등급)", "8.4km/ℓ (5등급)", "—", "—", "11.0km/ℓ (4등급)", "8.2km/ℓ (5등급)", "—"],
      ["도심 · 고속 연비", "7.9 · 9.5km/ℓ", "11.0 · 12.5km/ℓ", "7.6 · 9.5km/ℓ", "—", "—", "10.1 · 12.3km/ℓ", "7.5 · 9.4km/ℓ", "—"],
      ["CO₂ 배출", "200g/km", "165g/km", "205g/km", "—", "—", "176g/km", "208g/km", "—"],
      ["공차중량", "2,270kg", "2,380kg", "2,395kg", "—", "—", "2,390kg", "2,325kg", "—"],
      ["전장 · 전폭 · 전고", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "—", "4,940 · 2,020 · 1,715mm", "4,940 · 2,020 · 1,715mm", "—"],
      ["휠베이스", "2,995mm", "2,995mm", "2,995mm", "2,995mm", "—", "2,935mm", "2,935mm", "—"],
      ["트렁크", "630~2,055ℓ", "630~2,055ℓ", "630~2,055ℓ", "630~2,055ℓ", "—", "655~1,790ℓ", "655~1,790ℓ", "—"]
    ] },
    specNote: "연비 · CO₂ · 중량 · 크기는 26년식 카탈로그의 인증 차량 제원입니다. GLE 450 AMG Line(21인치)은 인증 차량과 휠이 달라 연비 · 중량을 비워 두었고, AMG GLE 53 제원은 공식 자료가 나오는 대로 채워 넣겠습니다.",

    wheels: {
      "30r": { name:"20인치 5 트윈 스포크 알로이 휠", img:P + "wheel-30r.jpg" },
      rwa:   { name:"21인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rwa.jpg" },
      rzv:   { name:"20인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rzv.jpg" },
      rpg:   { name:"22인치 AMG 멀티 스포크 경량 알로이 휠" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-artico-black.jpg" },
        { name:"바히아 브라운 / 블랙", img:P + "seat-artico-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-artico-beige.jpg" } ]},
      articoCoupe: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-artico-coupe.jpg" } ]},
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-nappa-black.jpg" } ]},
      amgnappa: { name:"AMG 나파 가죽", colors:[
        { name:"블랙" }, { name:"마키아토 베이지 / 블랙" }, { name:"레드 페퍼 / 블랙" }, { name:"내추럴 베이지" } ]}
    },
    woods: {
      h31:   { name:"앤트러사이트 오픈 포어 오크 우드 트림", img:P + "wood-h31.jpg" },
      "04h": { name:"하이 글로스 브라운 라인스트럭처 라임 우드 트림", img:P + "wood-04h.jpg" },
      h86:   { name:"AMG 카본파이버 트림" }
    },
    colors: (function(){
      function c(name, code){ return { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "COUPE": P + "coupe-" + code + ".jpg" } }; }
      return [ c("폴라 화이트", "149u"), c("옵시디안 블랙", "197u"), c("소달라이트 블루", "842u"), c("하이 테크 실버", "922u"), c("셀레나이트 그레이", "992u") ];
    })()
  };
})();
