/* ─────────────────────────────────────────────────────────
   GLE 구성 페이지 자료 (model.html?m=GLE) — 27년식 GLE · GLE 쿠페 2트림(페이스리프트 · 사전계약) + 26년식 SUV 5 · 쿠페 3트림
   - 27년식(11-18 추가): MY27 GLE & GLE Coupé 제품정보 v1 (2026-11, 사양표) + GLE & GLE Coupé 카탈로그(2026-11-18, 27년식 · 인증 제원 · 색상 · 휠)
     — 두 자료 어디에도 없는 항목은 「문의」로 적는다(출력 · 토크 · 0→100 · 휠베이스 · 트렁크 포함). 사진 gle27-* 은 이 두 자료 · 실제 번호판은 가림.
   - 트림 구성 · 시트 · 트림 · 휠: MY26 GLE / GLE Coupé Order Guideline (2025-11). 27년식은 위 제품정보
   - 사양 · 연비 · CO₂ · 중량 · 크기, 사진: GLE & GLE Coupé 카탈로그(2026-06-19, 26년식)
   - 최고출력 · 0→100km/h · 트렁크 · 휠베이스: 사이트 모델 창(MODEL_INFO)과 같은 값
   - AMG GLE 53 은 카탈로그가 없어 가격 · 휠 · 시트 · 트림만 싣는다(제원은 —)
   - 가격: 2026-11-16 공식 가격표(27년식 2트림 · 26년식)
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/gle/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLE"] = (function(){
  var P = "images/cars/gle/";
  var AMGNOTE = "GLE 카탈로그 이미지 · AMG GLE 53 사진은 준비 중";
  return {
    name: "GLE",
    badge: "🆕 27년식 GLE 페이스리프트 · 26년식 GLE · GLE Coupé",
    tagline: "여유로운 공간과 존재감의 패밀리 SUV.<br>새로 나온 27년식 GLE · GLE 쿠페(사전계약 중)와 26년식 SUV 5트림 · 쿠페 3트림을 한눈에.",
    asof: "27년식 GLE · GLE Coupé 카탈로그 2026년 11월 18일 · MY27 제품정보 2026년 11월 · MY26 오더 가이드라인 2025년 11월 · 카탈로그 2026년 6월",
    source: "GLE & GLE Coupé 카탈로그(2026년 11월 18일, 27년식) · MY27 GLE · GLE Coupé 제품정보(2026년 11월) · MY26 GLE · GLE Coupé 오더 가이드라인(2025년 11월) · GLE & GLE Coupé 카탈로그(2026년 6월, 26년식) · 공식 가격표(2026년 11월 16일)",
    hero: [P + "gle27-hero2.jpg", P + "gle27-dash2.jpg", P + "gle27-hero.jpg", P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { SUV27: "SUV · 27년식", COUPE27: "쿠페 · 27년식", SUV: "SUV · 26년식", COUPE: "쿠페 · 26년식" },
    diffByBody: true,
    lines: { "AMG Line|SUV27": P + "gle27-line-suv.jpg", "AMG Line|COUPE27": P + "gle27-line-coupe.jpg", "MB 스타일링|SUV": P + "line-std.jpg", "AMG Line|SUV": P + "line-amg.jpg", "AMG Line|COUPE": P + "line-coupe.jpg" },

    trims: [
      { id:"gle450amg27", name:"GLE 450 4MATIC AMG Line", short:"27 GLE 450 AMG Line", body:"SUV27", line:"AMG Line", price:136700000, row:"27|GLE 450 4M AMG Line",
        img:P + "gle27-line-suv.jpg", imgNote:"27년식 GLE AMG Line · 카탈로그 이미지(다크 페트롤)",
        engine:"m256e", wheel:"w21t", upholstery:"leather27", wood:"h31", highlights:["조명 그릴 · 디지털 라이트", "MBUX 슈퍼스크린", "뒷좌석 전동 시트"] },
      { id:"glec450_27", name:"GLE 450 4MATIC Coupé", short:"27 GLE 450 쿠페", body:"COUPE27", line:"AMG Line", price:140800000, row:"27|GLE 450 4M AMG Line Coupé",
        img:P + "gle27-line-coupe.jpg", imgNote:"27년식 GLE 쿠페 · 카탈로그 이미지",
        engine:"m256e", wheel:"w21t", upholstery:"nappa27", wood:"h31", highlights:["나파 가죽 4색", "MBUX 슈퍼스크린", "부메스터® 3D 서라운드"] },
      { id:"gle350",  name:"GLE 350 4MATIC",        short:"26 GLE 350 4M",        body:"SUV", line:"MB 스타일링", price:118000000, row:"26|GLE 350 4M",
        engine:"m254", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["에어매틱 패키지", "부메스터® 서라운드 사운드", "헤드업 디스플레이"] },
      { id:"gle300d", name:"GLE 300 d 4MATIC",      short:"26 GLE 300 d 4M",      body:"SUV", line:"MB 스타일링", price:119200000, row:"26|GLE 300 d 4M",
        engine:"om654", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["디젤 복합연비 11.6km/ℓ", "에어매틱 패키지", "에너자이징 패키지"] },
      { id:"gle450",  name:"GLE 450 4MATIC",        short:"26 GLE 450 4M",        body:"SUV", line:"MB 스타일링", price:129000000, row:"26|GLE 450 4M",
        engine:"m256", wheel:"30r", upholstery:"artico", wood:"h31", highlights:["직렬 6기통 381마력", "에어매틱 패키지", "부메스터® 서라운드 사운드"] },
      { id:"gle450amg", name:"GLE 450 4MATIC AMG Line", short:"26 GLE 450 4M AMG Line", body:"SUV", line:"AMG Line", price:139000000, row:"26|GLE 450 4M AMG Line",
        engine:"m256", wheel:"rwa", upholstery:"nappa", wood:"h31", highlights:["나이트 패키지", "나파 가죽 시트 · 대시보드", "우드 · 가죽 스티어링 휠"] },
      { id:"gle53",   name:"Mercedes-AMG GLE 53 4MATIC+", short:"26 AMG GLE 53",  body:"SUV", line:"Mercedes-AMG", price:166000000, row:"26|AMG GLE 53 4M+", imgNote:AMGNOTE,
        engine:"amg53", wheel:"rpg", upholstery:"amgnappa", wood:"h86", highlights:["22인치 AMG 휠", "AMG 나파 가죽", "AMG 카본파이버 트림"] },
      { id:"glec450d", name:"GLE 450 d 4MATIC Coupé AMG Line", short:"26 Coupé 450 d 4M", body:"COUPE", line:"AMG Line", price:134000000, row:"26|GLE 450 d 4M Coupé",
        engine:"om656", wheel:"rzv", upholstery:"articoCoupe", wood:"04h", highlights:["직렬 6기통 디젤 367마력", "AMG Line 익스테리어", "20인치 AMG 휠"] },
      { id:"glec450", name:"GLE 450 4MATIC Coupé AMG Line", short:"26 Coupé 450 4M", body:"COUPE", line:"AMG Line", price:142500000, row:"26|GLE 450 4M AMG Line Coupé", alt:["26|GLE 450 4M Coupé"],
        engine:"m256", wheel:"rwa", upholstery:"nappa", wood:"h31", highlights:["나이트 패키지", "나파 가죽 시트 · 대시보드", "21인치 AMG 휠"] },
      { id:"glec53",  name:"Mercedes-AMG GLE 53 4MATIC+ Coupé", short:"26 AMG GLE 53 Coupé", body:"COUPE", line:"Mercedes-AMG", price:170000000, row:"26|AMG GLE 53 4M+ Coupé", imgNote:AMGNOTE,
        engine:"amg53", wheel:"rpg", upholstery:"amgnappa", wood:"h86", highlights:["22인치 AMG 휠", "AMG 나파 가죽", "AMG 카본파이버 트림"] }
    ],

    /* 트림 비교 — 열 순서 = trims(27년식 2 · 26년식 8). "S" 기본 · "-" 없음 · 「문의」 = 자료(27년식 사양표 · 26년식 카탈로그)에 없는 항목 */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "6기통 가솔린 (M256M EVO)", "6기통 가솔린 (M256M EVO)", "4기통 가솔린", "4기통 디젤", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린 (AMG)", "6기통 디젤", "6기통 가솔린", "6기통 가솔린 (AMG)"],
        ["구동", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC+", "4MATIC", "4MATIC", "4MATIC+"],
        ["변속기", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동", "9단 자동"],
        ["서스펜션", "에어매틱", "에어매틱", "에어매틱 패키지", "에어매틱 패키지", "에어매틱 패키지", "에어매틱 패키지", "AMG 전용", "에어매틱 패키지", "에어매틱 패키지", "AMG 전용"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AMG Line", "AMG Line", "MB 스타일링", "MB 스타일링", "MB 스타일링", "AMG Line", "Mercedes-AMG", "AMG Line", "AMG Line", "Mercedes-AMG"],
        ["헤드램프", "디지털 라이트", "디지털 라이트", "멀티빔 LED", "멀티빔 LED", "멀티빔 LED", "멀티빔 LED", "문의", "멀티빔 LED", "멀티빔 LED", "문의"],
        ["조명 그릴 (일루미네이티드 그릴)", "S", "S", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["별 모양 뒤 램프", "S", "S", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["휠", "21인치 AMG 5 트윈 스포크", "21인치 AMG 5 트윈 스포크", "20인치 5 트윈 스포크", "20인치 5 트윈 스포크", "20인치 5 트윈 스포크", "21인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크", "20인치 AMG 5 트윈 스포크", "21인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크"],
        ["나이트 패키지", "-", "-", "-", "-", "-", "S", "문의", "-", "S", "문의"],
        ["리어 스포일러", "문의", "문의", "-", "-", "-", "-", "-", "S", "S", "S"],
        ["파노라믹 선루프", "S", "S", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["알루미늄 러닝보드", "문의", "문의", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["파워 클로징", "S", "S", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["키레스 고 패키지", "S", "S", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["미러 패키지", "문의", "문의", "S", "S", "S", "S", "문의", "S", "S", "문의"],
        ["브랜드 로고 프로젝션", "S", "S", "문의", "문의", "문의", "문의", "문의", "문의", "문의", "문의"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "가죽 (3색)", "나파 가죽 (4색)", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "나파 가죽", "AMG 나파 가죽", "ARTICO 가죽", "나파 가죽", "AMG 나파 가죽"],
        ["대시보드 · 벨트라인", "문의", "문의", "ARTICO", "ARTICO", "ARTICO", "나파 가죽", "문의", "문의", "나파 가죽", "문의"],
        ["트림", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "AMG 카본파이버", "하이 글로스 브라운 라인스트럭처 라임 우드", "앤트러사이트 오픈 포어 오크 우드", "AMG 카본파이버"],
        ["스티어링 휠", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능, 우드 · 가죽", "AMG", "다기능, 나파 가죽", "다기능, 우드 · 가죽", "AMG"],
        ["앞좌석 열선 · 통풍 시트 · 메모리", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 전동 시트", "S", "-", "문의", "문의", "문의", "문의", "문의", "문의", "문의", "문의"],
        ["자동 온도 조절 · 앰비언트 라이트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["온도 조절 컵홀더", "문의", "문의", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["드라이빙 어시스턴스", "패키지 플러스 · MB.DRIVE 어시스트", "패키지 플러스 · MB.DRIVE 어시스트", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["360° 카메라 주차 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["투명 보닛", "문의", "문의", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이 · AR 내비게이션", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["디스플레이", "MBUX 슈퍼스크린 (12.3인치 3개)", "MBUX 슈퍼스크린 (12.3인치 3개)", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개", "디스플레이 두 개"],
        ["조수석 디스플레이", "S", "S", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["사운드", "부메스터® 3D 서라운드 (15스피커 · Dolby Atmos®)", "부메스터® 3D 서라운드 (15스피커 · Dolby Atmos®)", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드"],
        ["뒷좌석 사이드백", "S", "S", "문의", "문의", "문의", "문의", "문의", "문의", "문의", "문의"],
        ["앞좌석 무선 충전", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["에너자이징 패키지", "문의", "문의", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "27년식 칸은 27년식 카탈로그(2026년 11월 18일)와 MY27 제품정보 사양표 기준이고, 두 자료에 없는 항목은 「문의」로 적었습니다. 27년식은 26년식 AMG Line 에 있던 나이트 패키지가 빠졌습니다(SUV · 쿠페). 27년식은 휠(21인치 AMG 멀티 스포크 · 22인치 AMG 5 트윈 스포크)과 우드 트림(4가지) · 루프라이너를 고를 수 있습니다(카탈로그). 26년식 칸은 오더 가이드라인 · 카탈로그 기준입니다. AMG GLE 53 은 카탈로그가 없어 자료에 없는 칸을 「문의」로 두었습니다. 26년식은 MANUFAKTUR 외장 색상 선택이 끝났습니다(1월 생산분부터).",

    engineNote: "48V EQ 부스트(2세대 통합 스타터 제너레이터)가 최대 15kW 의 추가 출력과 200Nm 의 추가 토크로 엔진을 거듭니다(카탈로그). 전 트림 사륜구동 · 9단 자동변속기.",
    engines: {
      m256e: { name:"M256M EVO", kind:"직렬 6기통 가솔린 + eBooster (27년식)", chips:["2,998cc", "9단 자동", "4MATIC"],
               desc:"27년식 GLE 450 · GLE 450 쿠페의 새 엔진입니다. 새 엔진 소프트웨어와 <b>전동식 보조 컴프레서(eBooster)</b>가 낮은 회전에서도 큰 토크를 냅니다(27년식 카탈로그). 복합연비 SUV 8.5 · 쿠페 8.3km/ℓ(5등급) · <b>출력 · 토크 수치는 아직 자료에 없어</b> 상담 때 안내드립니다." },
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
      ["엔진", "M256M EVO", "M256M EVO", "M 254", "OM 654", "M 256", "M 256", "—", "OM 656", "M 256", "—"],
      ["배기량", "2,998cc", "2,998cc", "1,999cc", "1,993cc", "2,998cc", "2,998cc", "—", "2,989cc", "2,998cc", "—"],
      ["최고출력", "문의", "문의", "258마력", "269마력", "381마력", "381마력", "—", "367마력", "381마력", "—"],
      ["0→100km/h", "문의", "문의", "7.5초", "6.9초", "5.6초", "5.6초", "—", "5.6초", "5.6초", "—"],
      ["복합연비 (등급)", "8.5km/ℓ (5등급)", "8.3km/ℓ (5등급)", "8.6km/ℓ (5등급)", "11.6km/ℓ (3등급)", "8.4km/ℓ (5등급)", "—", "—", "11.0km/ℓ (4등급)", "8.2km/ℓ (5등급)", "—"],
      ["도심 · 고속 연비", "7.7 · 9.7km/ℓ", "7.5 · 9.6km/ℓ", "7.9 · 9.5km/ℓ", "11.0 · 12.5km/ℓ", "7.6 · 9.5km/ℓ", "—", "—", "10.1 · 12.3km/ℓ", "7.5 · 9.4km/ℓ", "—"],
      ["CO₂ 배출", "203g/km", "207g/km", "200g/km", "165g/km", "205g/km", "—", "—", "176g/km", "208g/km", "—"],
      ["공차중량", "2,375kg", "2,315kg", "2,270kg", "2,380kg", "2,395kg", "—", "—", "2,390kg", "2,325kg", "—"],
      ["전장 · 전폭 · 전고", "4,925 · 2,010 · 1,780mm", "4,940 · 2,020 · 1,715mm", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "4,925 · 2,010 · 1,780mm", "—", "4,940 · 2,020 · 1,715mm", "4,940 · 2,020 · 1,715mm", "—"],
      ["휠베이스", "문의", "문의", "2,995mm", "2,995mm", "2,995mm", "2,995mm", "—", "2,935mm", "2,935mm", "—"],
      ["트렁크", "문의", "문의", "630~2,055ℓ", "630~2,055ℓ", "630~2,055ℓ", "630~2,055ℓ", "—", "655~1,790ℓ", "655~1,790ℓ", "—"]
    ] },
    specNote: "27년식 칸은 27년식 카탈로그(2026년 11월 18일)의 인증 차량 제원이고, 카탈로그에 없는 최고출력 · 0→100km/h · 휠베이스 · 트렁크는 「문의」로 두었습니다. 26년식 연비 · CO₂ · 중량 · 크기는 26년식 카탈로그의 인증 차량 제원입니다. GLE 450 AMG Line(21인치)은 인증 차량과 휠이 달라 연비 · 중량을 비워 두었고, AMG GLE 53 제원은 공식 자료가 나오는 대로 채워 넣겠습니다.",

    wheels: {
      "30r": { name:"20인치 5 트윈 스포크 알로이 휠", img:P + "wheel-30r.jpg" },
      rwa:   { name:"21인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rwa.jpg" },
      rzv:   { name:"20인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rzv.jpg" },
      rpg:   { name:"22인치 AMG 멀티 스포크 경량 알로이 휠" },
      w21t:  { name:"21인치 AMG 5 트윈 스포크 경량 알로이 휠 (27년식)", img:P + "gle27-wheel-rwc.jpg" }
    },
    upholstery: {
      leather27: { name:"가죽 (27년식 SUV)", colors:[
        { name:"블랙", img:P + "gle27-seat-black.jpg" },
        { name:"비치 브라운 / 블랙", img:P + "gle27-seat-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "gle27-seat-beige.jpg" } ]},
      nappa27: { name:"나파 가죽 (27년식 쿠페)", colors:[
        { name:"블랙", img:P + "gle27-cseat-black.jpg" },
        { name:"비치브라운 / 블랙", img:P + "gle27-cseat-brown.jpg" },
        { name:"투톤 화이트 / 블랙", img:P + "gle27-cseat-white.jpg" },
        { name:"투톤 클래식 레드 / 블랙", img:P + "gle27-cseat-red.jpg" } ]},
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
      function c(name, code){ return { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "COUPE": P + "coupe-" + code + ".jpg" }, not:["SUV27", "COUPE27"] }; }
      function n(name, code){ return { name:name, img:P + "gle27-color-" + code + ".jpg", lineImg:{ "COUPE27": P + "gle27-coupe-" + code + ".jpg" }, only:["SUV27", "COUPE27"] }; }   // 27년식 카탈로그(11-18)
      return [ n("폴라 화이트", "149u"), n("옵시디안 블랙", "197u"), n("다크 페트롤", "489u"), n("소달라이트 블루", "842u"), n("하이테크 실버", "922u"),
               c("폴라 화이트", "149u"), c("옵시디안 블랙", "197u"), c("소달라이트 블루", "842u"), c("하이 테크 실버", "922u"), c("셀레나이트 그레이", "992u") ];
    })()
  };
})();
