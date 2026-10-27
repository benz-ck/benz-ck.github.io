/* ─────────────────────────────────────────────────────────
   GLC 구성 페이지 자료 (model.html?m=GLC)
   - 트림 구성 · SUV 사양 비교 · 최고출력: MY27 GLC 제품정보 v2 (2026-10, Specification · Product Line-up)
   - 쿠페 트림 구성: MY27 GLC Coupe 제품정보 v1 (2026-09). 쿠페판에는 사양표가 없어
     같은 등급 SUV(27년식)와 26년식 카탈로그 쿠페 Option list 로 채웠다 — 페이지에 그렇게 밝힌다
   - 토크 · 0→100 · 연비 · 크기, 사진 · 휠 · 시트 · 트림 · 색상: GLC & GLC Coupé 카탈로그(2026-02-27, 26년식)
     · AMG GLC & GLC Coupé 카탈로그(2026-02-20, 26년식 AMG GLC 43 — 53 사진 · 색상은 이 카탈로그 기준)
   - 가격: 2026-10-27 공식 가격표
   제품정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/glc/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLC"] = (function(){
  var P = "images/cars/glc/";
  return {
    name: "GLC",
    badge: "27년식 GLC · GLC Coupé",
    tagline: "첫 벤츠로 가장 많이 고르시는 SUV.<br>SUV 5트림과 쿠페 5트림을 한눈에.",
    asof: "MY27 GLC 제품정보 2026년 10월 · GLC Coupe 제품정보 2026년 9월",
    source: "MY27 GLC 제품정보(2026년 10월) · MY27 GLC Coupe 제품정보(2026년 9월) · GLC & GLC Coupé 카탈로그(2026년 2월, 26년식) · AMG GLC 카탈로그(2026년 2월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-3.jpg", P + "hero-5.jpg", P + "hero-2.jpg", P + "hero-4.jpg"],
    bodies: { SUV: "SUV", COUPE: "쿠페" },
    diffByBody: true,
    lines: { "AVANTGARDE|SUV": P + "line-av.jpg", "AMG Line|SUV": P + "line-amg.jpg", "AVANTGARDE|COUPE": P + "line-av-coupe.jpg",
             "AMG Line|COUPE": P + "line-amg-coupe.jpg", "Mercedes-AMG|SUV": P + "line-53.jpg", "Mercedes-AMG|COUPE": P + "line-53-coupe.jpg" },

    /* SUV 먼저(가격 순) · 쿠페 다음 — 「달라지는 사양」은 같은 차체의 바로 아래 트림과 비교 */
    trims: [
      { id:"glc300",  name:"GLC 300 4MATIC",                short:"GLC 300 4M",            body:"SUV",   line:"AVANTGARDE", price:77000000,  row:"27|GLC 300 4M",
        engine:"m254", wheel:"78r", upholstery:"artico", wood:"h50", highlights:["통풍 시트", "파노라믹 선루프", "전동 트렁크"] },
      { id:"glc220d", name:"GLC 220 d 4MATIC",              short:"GLC 220 d 4M",          body:"SUV",   line:"AVANTGARDE", price:82200000,  row:"27|GLC 220 d 4M", alt:["26|GLC 220 d 4M"],
        engine:"om654", wheel:"78r", upholstery:"artico", wood:"h08", highlights:["디젤 복합연비 14.5km/ℓ", "헤드업 디스플레이", "통풍 시트"] },
      { id:"glc300av", name:"GLC 300 4MATIC AVANTGARDE",    short:"GLC 300 4M AVANTGARDE", body:"SUV",   line:"AVANTGARDE", price:82500000,  row:"27|GLC 300 4M AV", alt:["26|GLC 300 4M AV"],
        engine:"m254", wheel:"78r", upholstery:"artico", wood:"h50", highlights:["헤드업 디스플레이", "부메스터® 3D 사운드", "디지털 라이트"] },
      { id:"glc300amg", name:"GLC 300 4MATIC AMG Line",     short:"GLC 300 4M AMG Line",   body:"SUV",   line:"AMG Line",   price:95500000,  row:"27|GLC 300 4M AMG Line", alt:["26|GLC 300 4M AMG Line"],
        engine:"m254", wheel:"rvu", upholstery:"amgline", wood:"h04", highlights:["에어매틱 서스펜션", "리어 액슬 스티어링", "부메스터® 3D 사운드"] },
      { id:"glc53",   name:"Mercedes-AMG GLC 53 4MATIC+",   short:"AMG GLC 53",            body:"SUV",   line:"Mercedes-AMG", price:105100000, row:"27|AMG GLC 53 4M+", alt:["26|AMG GLC 43 4M"],
        imgNote:"Mercedes-AMG GLC 디자인 · 카탈로그 이미지(26년식 GLC 43)",
        engine:"m256", wheel:"rvm", upholstery:"amg", wood:"h64", highlights:["직렬 6기통 449마력", "AMG 라이드 컨트롤 서스펜션", "리어 액슬 스티어링"] },
      { id:"glcc300", name:"GLC 300 4MATIC Coupé",          short:"Coupé 300 4M",          body:"COUPE", line:"AVANTGARDE", price:80000000,  row:"27|GLC 300 4M Coupé",
        engine:"m254", wheel:"c19", upholstery:"artico", wood:"h50", highlights:["쿠페 루프라인", "통풍 시트", "파노라믹 선루프"] },
      { id:"glcc300av", name:"GLC 300 4MATIC Coupé AVANTGARDE", short:"Coupé 300 4M AVANTGARDE", body:"COUPE", line:"AVANTGARDE", price:86600000, row:"27|GLC 300 4M Coupé AV", alt:["26|GLC 300 4M Coupé AV"],
        engine:"m254", wheel:"c19", upholstery:"artico", wood:"h50", highlights:["헤드업 디스플레이", "부메스터® 3D 사운드", "디지털 라이트"] },
      { id:"glcc300amg1", name:"GLC 300 4MATIC Coupé AMG Line (27년식 초기 생산분)", short:"Coupé AMG Line 초기분", body:"COUPE", line:"AMG Line", price:96900000, row:"27|GLC 300 4M Coupé AMG Line", alt:["26|GLC 300 4M Coupé AMG Line"],
        engine:"m254", wheel:"rvo", upholstery:"amgline", wood:"h04", highlights:["AMG Line 익스테리어", "20인치 AMG 휠", "스포츠 서스펜션"] },
      { id:"glcc300amg", name:"GLC 300 4MATIC Coupé AMG Line", short:"Coupé 300 4M AMG Line", body:"COUPE", line:"AMG Line", price:97900000, row:"",
        dealNote:"27년식 새 사양(에어매틱 · 리어 액슬 스티어링 추가)이라 " + PRICE_MONTH + "월 프로모션 공문에 아직 없습니다. 조건은 문의 주세요.",
        engine:"m254", wheel:"rvo", upholstery:"amgline", wood:"h04", highlights:["에어매틱 서스펜션", "리어 액슬 스티어링", "부메스터® 3D 사운드"] },
      { id:"glcc53",  name:"Mercedes-AMG GLC 53 4MATIC+ Coupé", short:"AMG GLC 53 Coupé",  body:"COUPE", line:"Mercedes-AMG", price:109800000, row:"27|AMG GLC 53 4M+ Coupé", alt:["26|AMG GLC 43 4M Coupé"],
        imgNote:"Mercedes-AMG GLC Coupé 디자인 · 카탈로그 이미지(26년식 GLC 43)",
        engine:"m256", wheel:"rvm", upholstery:"amg", wood:"h64", highlights:["직렬 6기통 449마력", "AMG 라이드 컨트롤 서스펜션", "리어 액슬 스티어링"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린", "4기통 디젤", "4기통 가솔린", "4기통 가솔린", "6기통 가솔린 (AMG)", "4기통 가솔린", "4기통 가솔린", "4기통 가솔린", "4기통 가솔린", "6기통 가솔린 (AMG)"],
        ["구동", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC+", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC+"],
        ["서스펜션", "어질리티 컨트롤", "어질리티 컨트롤", "어질리티 컨트롤", "에어매틱", "AMG 라이드 컨트롤", "스포츠", "스포츠", "스포츠", "에어매틱", "AMG 라이드 컨트롤"],
        ["리어 액슬 스티어링", "-", "-", "-", "S", "S", "-", "-", "-", "S", "S"],
        ["배기 사운드", "-", "-", "-", "스포티 엔진 사운드", "AMG 퍼포먼스 사운드", "-", "-", "스포티 엔진 사운드", "스포티 엔진 사운드", "AMG 퍼포먼스 사운드"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AVANTGARDE", "AVANTGARDE", "AVANTGARDE", "AMG Line", "Mercedes-AMG", "AVANTGARDE", "AVANTGARDE", "AMG Line", "AMG Line", "Mercedes-AMG"],
        ["휠", "19인치 10트윈 스포크", "19인치 10트윈 스포크", "19인치 10트윈 스포크", "20인치 AMG 멀티 스포크", "20인치 AMG 10 스포크", "19인치", "19인치", "20인치 AMG 멀티 스포크", "20인치 AMG 멀티 스포크", "20인치 AMG 10 스포크"],
        ["스페어 타이어", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏"],
        ["선루프", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹"]
      ]},
      { g:"라이트 · 글래스", rows:[
        ["헤드램프", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트"],
        ["상향등 어시스트 · 로고 프로젝터", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["앰비언트 라이트", "플러스", "플러스", "플러스", "플러스", "플러스", "플러스", "플러스", "플러스", "플러스", "플러스"],
        ["어쿠스틱 글래스", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "AMG 가죽", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "AMG 가죽"],
        ["시트 타입", "컴포트", "컴포트", "컴포트", "스포츠", "스포츠", "컴포트", "컴포트", "스포츠", "스포츠", "스포츠"],
        ["트림", "실버 그레이 다이아몬드 패턴", "안트라사이트 라인스트럭쳐 라임 우드", "실버 그레이 다이아몬드 패턴", "블랙 오픈포어 알루미늄 라인 우드", "메탈 스트럭쳐", "실버 그레이 다이아몬드 패턴", "실버 그레이 다이아몬드 패턴", "블랙 오픈포어 알루미늄 라인 우드", "블랙 오픈포어 알루미늄 라인 우드", "메탈 스트럭쳐"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["열선 스티어링 휠", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 (앞좌석)", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 (뒷좌석)", "-", "-", "-", "-", "S", "-", "-", "-", "-", "S"],
        ["앞좌석 열선 · 통풍 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 열선 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["메모리 패키지 (앞좌석)", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전", rows:[
        ["드라이빙 어시스턴스 패키지 플러스", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 디스턴스 어시스트 디스트로닉 · 액티브 브레이크 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 차선 이탈 방지 · 사각지대 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["PRE-SAFE® 플러스 · 임펄스 사이드", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 주차 어시스트 · 360° 카메라", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"MBUX · 인포테인먼트", rows:[
        ["3세대 MBUX · 내비게이션 · 증강현실 내비게이션", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["12.3인치 계기반 · 11.9인치 미디어 디스플레이", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이", "-", "S", "S", "S", "S", "-", "S", "S", "S", "S"],
        ["사운드 시스템", "기본", "기본", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드", "기본", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드"],
        ["스마트폰 통합 패키지 · 앞좌석 무선 충전", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"편의", rows:[
        ["키레스 고 · 핸즈프리 액세스 · 전동 트렁크", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["MBUX 인테리어 어시스트", "-", "-", "-", "-", "S", "-", "-", "-", "-", "S"],
        ["공기 청정 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "쿠페 5트림은 27년식 쿠페 제품정보에 사양표가 없어, 같은 등급 SUV(27년식)와 26년식 카탈로그의 쿠페 사양으로 적었습니다. 계약 전 해당 차량 사양을 한 번 더 확인해 드립니다.",

    engineNote: "GLC 300 · 220 d 에는 2세대 통합 스타터 제너레이터(ISG)와 48V 마일드 하이브리드가 들어가 최대 17kW · 205Nm 를 보탭니다(카탈로그). AMG GLC 53 은 27년식부터 6기통 엔진으로 바뀌었습니다.",
    engines: {
      m254: { name:"M 254", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,999cc", "258마력", "40.8kg·m"],
              desc:"GLC 300 의 엔진. 0→100km/h <b>SUV 6.2초 · 쿠페 6.3초</b>(26년식 인증 기준)로 경쾌하고, 48V 시스템이 출발과 재가속을 거듭니다." },
      om654: { name:"OM 654 M", kind:"직렬 4기통 디젤", chips:["1,993cc", "197마력", "44.9kg·m"],
              desc:"토크가 가장 크고 <b>복합연비 14.5km/ℓ (2등급)</b>로 가장 효율적입니다(26년식 GLC 220 d 4MATIC 인증 기준). 장거리가 많으시면 이쪽입니다." },
      m256: { name:"M 256 M EVO (AMG)", kind:"직렬 6기통 가솔린 + 통합 스타터 제너레이터", chips:["2,998cc", "449마력", "4MATIC+"],
              desc:"27년식 AMG GLC 53 의 엔진. 26년식 GLC 43 의 4기통을 대신해 <b>6기통 449마력</b>이 들어가고, 가변식 사륜구동 4MATIC+ 와 짝을 이룹니다." }
    },

    /* 트림별 제원 — 출력: 27년식 제품정보 / 나머지: 26년식 카탈로그 인증 차량 제원(휠 · 서스펜션이 같을 때만) */
    specs: { rows: [
      ["엔진", "M 254", "OM 654 M", "M 254", "M 254", "M 256 M EVO", "M 254", "M 254", "M 254", "M 254", "M 256 M EVO"],
      ["배기량", "1,999cc", "1,993cc", "1,999cc", "1,999cc", "2,998cc", "1,999cc", "1,999cc", "1,999cc", "1,999cc", "2,998cc"],
      ["최고출력", "258마력", "197마력", "258마력", "258마력", "449마력", "258마력", "258마력", "258마력", "258마력", "449마력"],
      ["최대토크", "40.8kg·m", "44.9kg·m", "40.8kg·m", "40.8kg·m", "—", "40.8kg·m", "40.8kg·m", "40.8kg·m", "40.8kg·m", "—"],
      ["0→100km/h", "6.2초", "8.0초", "6.2초", "6.2초", "—", "6.3초", "6.3초", "6.3초", "6.3초", "—"],
      ["최고속도", "240km/h", "219km/h", "240km/h", "240km/h", "—", "246km/h", "246km/h", "246km/h", "246km/h", "—"],
      ["복합연비 (등급)", "—", "14.5km/ℓ (2등급)", "—", "—", "—", "—", "—", "10.6km/ℓ (4등급)", "—", "—"],
      ["CO₂ 배출", "—", "130g/km", "—", "—", "—", "—", "—", "159g/km", "—", "—"],
      ["공차중량", "—", "1,965kg", "—", "—", "—", "—", "—", "1,940kg", "—", "—"],
      ["전장 · 전폭 · 전고", "4,720 · 1,890 · 1,645mm", "4,720 · 1,890 · 1,645mm", "4,720 · 1,890 · 1,645mm", "4,720 · 1,890 · 1,645mm", "—", "4,770 · 1,920 · 1,600mm", "4,770 · 1,920 · 1,600mm", "4,770 · 1,920 · 1,600mm", "4,770 · 1,920 · 1,600mm", "—"],
      ["휠베이스", "2,890mm", "2,890mm", "2,890mm", "2,890mm", "—", "2,890mm", "2,890mm", "2,890mm", "2,890mm", "—"],
      ["트렁크", "620~1,680ℓ", "620~1,680ℓ", "620~1,680ℓ", "620~1,680ℓ", "—", "545~1,490ℓ", "545~1,490ℓ", "545~1,490ℓ", "545~1,490ℓ", "—"]
    ] },
    specNote: "최고출력 · 배기량은 27년식 제품정보, 토크 · 0→100km/h · 최고속도 · 연비 · 크기는 26년식 카탈로그의 인증 차량 제원(같은 엔진)입니다. 연비 · CO₂ · 중량은 휠 · 서스펜션이 인증 차량과 같은 트림에만 적었습니다. 27년식 AMG GLC 53 은 공식 제원이 나오는 대로 채워 넣겠습니다.",

    wheels: {
      "78r": { name:"19인치 10트윈 스포크 경량 알로이 휠", img:P + "wheel-78r.jpg" },
      c19:   { name:"19인치 경량 알로이 휠" },
      rvu:   { name:"20인치 AMG 멀티 스포크 알로이 휠", img:P + "wheel-rvu.jpg" },
      rvo:   { name:"20인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rvo.jpg" },
      rvm:   { name:"20인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rvm.jpg" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-artico-black.jpg" },
        { name:"시에나 브라운 / 블랙", img:P + "seat-artico-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-artico-beige.jpg" } ]},
      amgline: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-amgline-black.jpg" },
        { name:"네바 그레이 / 블랙", img:P + "seat-amgline-grey.jpg" },
        { name:"투톤 시에나 브라운 / 블랙", img:P + "seat-amgline-brown.jpg" } ]},
      amg: { name:"AMG 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" } ]}
    },
    woods: {
      h50: { name:"실버 그레이 다이아몬드 패턴 트림", img:P + "wood-h50.jpg" },
      h08: { name:"안트라사이트 라인스트럭쳐 라임 우드 트림", img:P + "wood-h08.jpg" },
      h04: { name:"블랙 오픈포어 알루미늄 라인 우드 트림", img:P + "wood-h04.jpg" },
      h64: { name:"메탈 스트럭쳐 트림", img:P + "wood-h64.jpg" }
    },
    /* 카탈로그 「Colours」 — 쿠페를 고르면 쿠페 사진, AMG 를 고르면 AMG 사진 */
    colors: (function(){
      function c(name, code, mfk, only){
        var o = { name:name, img:P + "color-" + code + ".jpg",
          lineImg:{ "COUPE": P + "coupe-" + code + ".jpg", "Mercedes-AMG|SUV": P + "amg-" + code + ".jpg", "Mercedes-AMG|COUPE": P + "amgcoupe-" + code + ".jpg" } };
        if (mfk) o.mfk = true;
        if (only) { o.only = only; o.img = P + "amg-" + code + ".jpg"; delete o.lineImg.COUPE; }   /* AMG 전용 색은 쿠페도 AMG 사진만 */
        return o;
      }
      return [
        c("폴라 화이트", "149u"), c("옵시디안 블랙", "197u"), c("베르데 실버", "188u"), c("그라파이트 그레이", "831u"),
        c("하이 테크 실버", "922u"), c("스펙트럴 블루", "970u"),
        c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", true), c("MANUFAKTUR 알파인 그레이", "956u", true), c("MANUFAKTUR 파타고니아 레드 메탈릭", "993u", true),
        c("MANUFAKTUR 하이 테크 실버 마그노", "734u", true, "Mercedes-AMG"), c("MANUFAKTUR 그라파이트 그레이 마그노", "818u", true, "Mercedes-AMG")
      ];
    })()
  };
})();
