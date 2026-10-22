/* ─────────────────────────────────────────────────────────
   S-Class 구성 페이지 자료 (model.html?m=S-Class)
   - 트림 구성 · 사양 비교: MY27 S-Class 제품 정보 v4 (2026-10, Option List · Product Line-up)
   - 사진 · 휠 · 시트 · 우드 · 외장 색상 이름: S-Class 카탈로그 (2026-05-18, 27년식) · 마이바흐 S-Class 카탈로그 (2026-08-11)
   - 마이바흐 연비 · CO2 · 중량 · 크기: 마이바흐 S-Class 카탈로그 Technical Data(인증 차량 제원)
   - 가격: 2026-10-20 공식 가격표(부가세 포함) · 배기량: 어프로치 북
   제품정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만).
   사진은 images/cars/s-class/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["S-Class"] = (function(){
  var P = "images/cars/s-class/";
  return {
    name: "S-Class",
    badge: "27년식 The new S-Class · Mercedes-Maybach",
    tagline: "세계에서 가장 많이 팔린 럭셔리 세단의 페이스리프트.<br>S-Class 6트림과 마이바흐 3트림을 한눈에.",
    asof: "MY27 제품 정보 2026년 10월",
    source: "MY27 S-Class 제품 정보(2026년 10월) · S-Class 카탈로그(2026년 5월, 27년식) · 마이바흐 S-Class 카탈로그(2026년 8월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "line-amg.jpg", P + "hero-mb-1.jpg", P + "hero-3.jpg", P + "hero-mb-2.jpg", P + "hero-4.jpg"],
    bodies: { SWB: "스탠다드 휠베이스", LWB: "롱 휠베이스", MB: "마이바흐 휠베이스" },
    lines: { "Standard": P + "line-standard.jpg", "AMG Line": P + "line-amg.jpg", "Maybach": P + "line-maybach.jpg" },

    /* 가격 오름차순 — row 는 PRICE_ROWS 의 "연식|트림"(이번 달 조건) */
    trims: [
      { id:"s350d", highlights:["에어매틱", "앞좌석 열선 · 통풍 시트", "뒷좌석 열선 시트"],  name:"S 350 d 4MATIC",             short:"S 350 d 4M",        body:"SWB", line:"Standard", price:154000000, row:"27|S 350 d 4M",              engine:"om656", wheel:"r60", upholstery:"leather", wood:"anthracite" },
      { id:"s450", highlights:["에어매틱", "앞좌석 열선 · 통풍 시트", "뒷좌석 열선 시트"],   name:"S 450 4MATIC",               short:"S 450 4M",          body:"SWB", line:"AMG Line", price:162400000, row:"27|S 450 4M",                engine:"m256",  wheel:"rzi", upholstery:"leather", wood:"anthracite" },
      { id:"s450le", highlights:["에어매틱", "메모리 뒷좌석 전동 시트", "뒷좌석 열선 · 통풍 시트"], name:"S 450 4MATIC Long Exclusive", short:"S 450 4M L Exclusive", body:"LWB", line:"Standard", price:175400000, row:"27|S 450 4M Long Exclusive", engine:"m256",  wheel:"60r", upholstery:"leather", wood:"fishbone" },
      { id:"s450la", highlights:["에어매틱", "MBUX 하이엔드 뒷좌석 엔터테인먼트", "앞좌석 액티브 멀티컨투어 시트"], name:"S 450 4MATIC Long AMG Line", short:"S 450 4M L AMG Line", body:"LWB", line:"AMG Line", price:195400000, row:"27|S 450 4M Long AMG Line",  engine:"m256",  wheel:"rtm", upholstery:"nappa",   wood:"fishbone" },
      { id:"s500l", highlights:["에어매틱", "쇼퍼 패키지 · 뒷좌석 마사지", "IR 라미네이티드 글래스"],  name:"S 500 4MATIC Long",          short:"S 500 4M L",        body:"LWB", line:"Standard", price:220000000, row:"27|S 500 4M Long",           engine:"m256",  wheel:"60r", upholstery:"nappa",   wood:"walnut" },
      { id:"s580l", highlights:["E-액티브 바디 컨트롤", "MBUX 증강현실 HUD", "익스클루시브 패키지"],  name:"S 580 4MATIC Long",          short:"S 580 4M L",        body:"LWB", line:"Standard", price:270000000, row:"27|S 580 4M Long",           engine:"m177",  wheel:"r73", upholstery:"exnappa", wood:"piano" },
      { id:"mb580",  highlights:["E-액티브 바디 컨트롤", "뒷좌석 컴포트 도어", "MANUFAKTUR 백레스트 트림"],
        name:"Mercedes-Maybach S 580",            short:"Maybach S 580",           body:"MB", line:"Maybach", price:317000000, row:"27|Maybach S 580",            engine:"m177", wheel:"r61", upholstery:"mbnappa",  wood:"piano" },
      { id:"mb580m", highlights:["E-액티브 바디 컨트롤", "MANUFAKTUR 인테리어 패키지", "MANUFAKTUR 외장 컬러"],
        name:"Mercedes-Maybach S 580 MANUFAKTUR", short:"Maybach S 580 MANUFAKTUR", body:"MB", line:"Maybach", price:336000000, row:"27|Maybach S 580 MANUFAKTUR", engine:"m177", wheel:"r61", upholstery:"mfknappa", wood:"piano" },
      { id:"mb680",  highlights:["V12 엔진 (12기통)", "MANUFAKTUR 가죽 패키지", "360° 프로텍션 플러스"],
        name:"Mercedes-Maybach S 680",            short:"Maybach S 680",           body:"MB", line:"Maybach", price:407000000, row:"27|Maybach S 680",            engine:"m279", wheel:"70r", upholstery:"mbnappa",  wood:"h38" }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "6기통 디젤", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린", "8기통 가솔린", "8기통 가솔린", "8기통 가솔린", "12기통 가솔린"],
        ["변속기", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC"],
        ["서스펜션", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "E-액티브 바디 컨트롤", "E-액티브 바디 컨트롤", "E-액티브 바디 컨트롤", "에어매틱"],
        ["리어 액슬 스티어링", "4.5°", "4.5°", "4.5°", "4.5°", "10°", "10°", "10°", "10°", "4.5°"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "Standard", "AMG Line", "Standard", "AMG Line", "Standard", "Standard", "Maybach", "Maybach", "Maybach"],
        ["휠", "19인치 멀티 트윈 스포크", "19인치 AMG 5 트윈 스포크", "20인치 멀티 스포크", "20인치 AMG 크로스 스포크", "20인치 멀티 스포크", "20인치 10 트윈 스포크 단조", "20인치 MAYBACH 5홀 단조", "20인치 MAYBACH 5홀 단조", "21인치 마이바흐 멀티 스포크 단조"],
        ["스페어 타이어", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏"],
        ["선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프", "파노라믹 선루프"]
      ]},
      { g:"라이트 · 글래스", rows:[
        ["헤드램프", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트 (프로젝션 기능)", "디지털 라이트 (프로젝션 기능)", "디지털 라이트 (프로젝션 기능)", "디지털 라이트 (프로젝션 기능)"],
        ["상향등 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["로고 프로젝터", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 앰비언트 라이트", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["글래스", "어쿠스틱 글래스 (앞)", "어쿠스틱 글래스 (앞)", "어쿠스틱 글래스 (앞)", "어쿠스틱 글래스 (앞)", "IR 라미네이티드 글래스", "IR 라미네이티드 글래스", "IR 라미네이티드 글래스", "IR 라미네이티드 글래스", "IR 라미네이티드 글래스"]
      ]},
      { g:"인테리어", rows:[
        ["인테리어 패키지", "-", "-", "-", "-", "-", "익스클루시브 패키지", "익스클루시브 패키지", "익스클루시브 · MANUFAKTUR 인테리어 패키지", "익스클루시브 패키지"],
        ["시트", "가죽", "가죽", "가죽", "나파 가죽", "나파 가죽", "익스클루시브 나파 가죽", "마이바흐 익스클루시브 나파 가죽", "MANUFAKTUR 마이바흐 익스클루시브 나파 가죽", "마이바흐 익스클루시브 나파 가죽"],
        ["우드 트림", "앤트러사이트 오픈-포어 우드", "앤트러사이트 오픈-포어 우드", "오픈-포어 브라운 우드, 피시본", "오픈-포어 브라운 우드, 피시본", "유광 월넛 우드, 블랙", "MANUFAKTUR 플로잉 라인 피아노 라커, 블랙", "MANUFAKTUR 플로잉 라인 피아노 라커, 블랙", "MANUFAKTUR 플로잉 라인 피아노 라커, 블랙", "MANUFAKTUR 브라운 오픈-포어 월넛, 알루미늄 라인"],
        ["스티어링 휠", "나파 가죽", "나파 가죽 (스포츠)", "나파 가죽", "나파 가죽 (스포츠)", "나파 가죽", "나파 가죽", "나파 가죽", "나파 가죽", "우드 · 가죽"],
        ["열선 스티어링 휠", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 (앞 · 뒤)", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["앞좌석 열선 · 통풍 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 시트 온도", "열선", "열선", "열선 · 통풍", "열선 · 통풍", "열선 · 통풍", "열선 · 통풍", "열선 · 통풍", "열선 · 통풍", "열선 · 통풍"],
        ["메모리 패키지", "앞좌석", "앞좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석"],
        ["멀티컨투어 시트", "-", "-", "-", "앞좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석"],
        ["뒷좌석 전동 시트", "-", "-", "S", "S", "S", "S", "S", "S", "S"],
        ["쇼퍼 패키지", "-", "-", "-", "-", "S", "S", "S", "S", "S"],
        ["선블라인드 (사이드 · 뒤)", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전", rows:[
        ["MB.드라이브 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["브레이크 · 차선 이탈 방지 · 사각지대 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["PRE-SAFE® 임펄스 · 임펄스 사이드", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["360° 카메라 주차 어시스트 · 파크트로닉", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["에어백", "11개", "11개", "11개", "13개 (뒷좌석 에어백)", "15개 (뒷좌석 에어백 · 벨트백)", "15개 (뒷좌석 에어백 · 벨트백)", "15개 (뒷좌석 에어백 · 벨트백)", "15개 (뒷좌석 에어백 · 벨트백)", "15개 (뒷좌석 에어백 · 벨트백)"]
      ]},
      { g:"MBUX · 인포테인먼트", rows:[
        ["4세대 MBUX · 내비게이션 · 동승석 디스플레이", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이", "S", "S", "S", "S", "S", "증강현실 HUD", "증강현실 HUD", "증강현실 HUD", "증강현실 HUD"],
        ["Burmester® 3D 사운드", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["스마트폰 통합 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 엔터테인먼트 시스템", "-", "-", "-", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 MBUX 리모트 컨트롤 (2개)", "-", "-", "-", "S", "S", "S", "S", "S", "S"],
        ["무선 충전", "앞좌석", "앞좌석", "앞좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석", "앞 · 뒷좌석"]
      ]},
      { g:"편의", rows:[
        ["플러시 도어 핸들 키레스 고 · 핸즈프리 액세스", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["전동 트렁크 · 파워 클로징", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["에어 밸런스 · 공기 청정 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["에너자이징 컴포트", "-", "-", "-", "-", "-", "S", "S", "S", "S"]
      ]}
    ],

    engineNote: "모든 엔진에 48V 마일드 하이브리드(통합형 스타터 제너레이터)가 들어가 출발 · 가속을 거들고 연료를 아낍니다. 전 트림 4MATIC 상시 사륜 · 9G-TRONIC 자동변속기.",
    engines: {
      om656: { name:"OM 656 M EVO", kind:"직렬 6기통 디젤 + 통합형 스타터 제너레이터", img:P + "engine-om656.jpg", chips:["2,989cc", "직렬 6기통", "디젤"],
               desc:"메르세데스-벤츠 역사상 가장 강력한 디젤 엔진입니다. 통합형 스타터 제너레이터(ISG)가 더해져 <b>힘 있는 주행과 효율</b>을 함께 냅니다." },
      m256:  { name:"M 256 M EVO", kind:"직렬 6기통 가솔린 + 48V 마일드 하이브리드", img:P + "engine-m256.jpg", chips:["2,999cc", "직렬 6기통", "+17kW · 205Nm 보조"],
               desc:"직렬 6기통 특유의 부드러움에, 48V 시스템과 ISG 가 <b>최대 17kW 의 추가 출력과 205Nm 의 추가 토크</b>를 더합니다." },
      m177:  { name:"M 177 EVO", kind:"V8 가솔린 + 48V 마일드 하이브리드", img:P + "engine-m177.jpg", chips:["3,982cc", "V8", "부스트 기능"],
               desc:"즉각적인 반응의 V8 가솔린 엔진입니다. 48V 시스템이 <b>부스트 기능</b>으로 추가 구동력을 내고, 연비에 유리한 주행 전략을 씁니다." },
      m279:  { name:"M 279 M", kind:"V12 가솔린 (60° V형)", img:P + "engine-m279.jpg", chips:["5,980cc", "V12", "One Man – One Engine"],
               desc:"60도 V형 12기통의 정숙함과 부드러움. 한 명의 엔지니어가 엔진 한 대를 처음부터 끝까지 책임지는 <b>“One Man – One Engine”</b> 방식으로 만듭니다." }
    },

    /* 트림별 제원 — 출력 · 연비 같은 국내 인증 수치는 공식 자료가 들어오면 rows 에 더한다 */
    specs: { rows: [
      ["엔진", "OM 656 M EVO", "M 256 M EVO", "M 256 M EVO", "M 256 M EVO", "M 256 M EVO", "M 177 EVO", "M 177 EVO", "M 177 EVO", "M 279 M"],
      ["형식", "직렬 6기통 디젤", "직렬 6기통 가솔린", "직렬 6기통 가솔린", "직렬 6기통 가솔린", "직렬 6기통 가솔린", "V8 가솔린", "V8 가솔린", "V8 가솔린", "V12 가솔린"],
      ["배기량", "2,989cc", "2,999cc", "2,999cc", "2,999cc", "2,999cc", "3,982cc", "3,982cc", "3,982cc", "5,980cc"],
      ["변속기 · 구동", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC", "9G-TRONIC · 4MATIC"],
      ["서스펜션", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "E-액티브 바디 컨트롤", "E-액티브 바디 컨트롤", "E-액티브 바디 컨트롤", "에어매틱"],
      ["리어 액슬 스티어링", "4.5°", "4.5°", "4.5°", "4.5°", "10°", "10°", "10°", "10°", "4.5°"],
      ["휠", "19인치", "19인치", "20인치", "20인치", "20인치", "20인치 단조", "20인치 단조", "20인치 단조", "21인치 단조"],
      ["차체", "스탠다드 휠베이스", "스탠다드 휠베이스", "롱 휠베이스", "롱 휠베이스", "롱 휠베이스", "롱 휠베이스", "마이바흐 휠베이스", "마이바흐 휠베이스", "마이바흐 휠베이스"],
      ["복합연비 (등급)", "—", "—", "—", "—", "—", "—", "7.7 km/ℓ (5등급)", "7.7 km/ℓ (5등급)", "6.2 km/ℓ (5등급)"],
      ["도심 · 고속 연비", "—", "—", "—", "—", "—", "—", "6.5 · 10.0 km/ℓ", "6.5 · 10.0 km/ℓ", "5.1 · 8.5 km/ℓ"],
      ["CO₂ 배출", "—", "—", "—", "—", "—", "—", "225 g/km", "225 g/km", "286 g/km"],
      ["공차중량", "—", "—", "—", "—", "—", "—", "2,370kg", "2,370kg", "2,370kg"],
      ["전장 · 전폭 · 전고", "—", "—", "—", "—", "—", "—", "5,485 · 1,920 · 1,510mm", "5,485 · 1,920 · 1,510mm", "5,485 · 1,920 · 1,510mm"]
    ] },
    specNote: "S-Class 배기량은 어프로치 북, 마이바흐 연비 · CO₂ · 중량 · 크기는 마이바흐 카탈로그의 인증 차량 제원(S 580 MANUFAKTUR 는 S 580 과 같은 인증 차종), 나머지는 27년식 제품 정보 기준입니다. S-Class 6트림의 출력 · 연비 같은 국내 인증 수치(—)는 공식 제원표가 나오는 대로 채워 넣겠습니다. 리어 액슬 스티어링 10°는 회전 반경이 약 2m 줄어듭니다(카탈로그).",

    wheels: {
      r60: { name:"19인치 멀티 트윈 스포크 경량 알로이 휠", img:P + "wheel-r60.jpg" },
      rzi: { name:"19인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rzi.jpg" },
      "60r": { name:"20인치 멀티 스포크 경량 알로이 휠", img:P + "wheel-60r.jpg" },
      rtm: { name:"20인치 AMG 크로스 스포크 경량 알로이 휠", img:P + "wheel-rtm.jpg" },
      r73: { name:"20인치 10 트윈 스포크 단조 휠", img:P + "wheel-r73.jpg" },
      r61: { name:"20인치 MAYBACH 5홀 단조 휠", img:P + "wheel-r61.jpg" },
      "70r": { name:"21인치 마이바흐 멀티 스포크 단조 휠", img:P + "wheel-70r.jpg" }
    },
    upholstery: {
      leather: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-black.jpg" },
        { name:"브라운 / 블랙", img:P + "seat-leather-brown.jpg" },
        { name:"마키아토 베이지 / 마그마 그레이", img:P + "seat-leather-beige.jpg" } ]},
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-nappa-black.jpg" },
        { name:"브라운 / 블랙", img:P + "seat-nappa-brown.jpg" },
        { name:"마키아토 베이지 / 마그마 그레이", img:P + "seat-nappa-beige.jpg" } ]},
      exnappa: { name:"익스클루시브 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-exnappa-black.jpg" },
        { name:"브라운 / 블랙", img:P + "seat-exnappa-brown.jpg" },
        { name:"마키아토 베이지 / 마그마 그레이", img:P + "seat-exnappa-beige.jpg" } ]},
      mbnappa: { name:"마이바흐 익스클루시브 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-mb-black.jpg" },
        { name:"브라운", img:P + "seat-mb-brown.jpg" },
        { name:"마키아토 베이지 / 브론즈 브라운 펄", img:P + "seat-mb-beige.jpg" } ]},
      mfknappa: { name:"MANUFAKTUR 마이바흐 익스클루시브 나파 가죽", colors:[
        { name:"토바코 / 블랙", img:P + "seat-mfk-tobacco.jpg" },
        { name:"딥 화이트 / 블랙", img:P + "seat-mfk-deepwhite.jpg" },
        { name:"요트 블루 / 블랙", img:P + "seat-mfk-yachtblue.jpg" },
        { name:"콘 옐로우 / 블랙", img:P + "seat-mfk-cornyellow.jpg" },
        { name:"레이크 그린 / 블랙", img:P + "seat-mfk-lakegreen.jpg" },
        { name:"카민 레드 / 블랙", img:P + "seat-mfk-carminered.jpg" } ]}
    },
    woods: {
      anthracite: { name:"앤트러사이트 오픈-포어 우드 트림", img:P + "wood-anthracite.jpg" },
      fishbone:   { name:"오픈-포어 브라운 우드 트림, 피시본 패턴", img:P + "wood-brown-fishbone.jpg" },
      walnut:     { name:"유광 월넛 우드 트림, 블랙", img:P + "wood-walnut-black.jpg" },
      piano:      { name:"MANUFAKTUR 플로잉 라인 피아노 라커 트림, 블랙", img:P + "wood-piano-lacquer.jpg" },
      h38:        { name:"MANUFAKTUR 브라운 오픈-포어 월넛 우드 트림, 알루미늄 라인", img:P + "wood-h38.jpg" }
    },
    /* 카탈로그 「Colours」 21가지 — 일반 색상 먼저, MANUFAKTUR(추가 비용) 뒤. 마이바흐 카탈로그도 같은 21가지 + 투톤 9가지 */
    colors: [
      { name:"옵시디안 블랙", img:P + "color-197u.jpg", imgMb:P + "mbcolor-197u.jpg" },
      { name:"블랙", img:P + "color-040u.jpg", imgMb:P + "mbcolor-040u.jpg" },
      { name:"그라파이트 그레이", img:P + "color-831u.jpg", imgMb:P + "mbcolor-831u.jpg" },
      { name:"하이 테크 실버", img:P + "color-922u.jpg", imgMb:P + "mbcolor-922u.jpg" },
      { name:"웜 그레이 솔리드", img:P + "color-715u.jpg", imgMb:P + "mbcolor-715u.jpg" },
      { name:"노틱 블루", img:P + "color-595u.jpg", imgMb:P + "mbcolor-595u.jpg" },
      { name:"벨벳 브라운", img:P + "color-771u.jpg", imgMb:P + "mbcolor-771u.jpg" },
      { name:"베르데 실버", img:P + "color-188u.jpg", imgMb:P + "mbcolor-188u.jpg" },
      { name:"에메랄드 그린", img:P + "color-989u.jpg", imgMb:P + "mbcolor-989u.jpg" },
      { name:"MANUFAKTUR 오팔라이트 화이트 브라이트", img:P + "color-885u.jpg", imgMb:P + "mbcolor-885u.jpg", mfk:true },
      { name:"MANUFAKTUR 오팔라이트 화이트 마그노", img:P + "color-659u.jpg", imgMb:P + "mbcolor-659u.jpg", mfk:true },
      { name:"MANUFAKTUR 나이트 블랙 마그노", img:P + "color-056u.jpg", imgMb:P + "mbcolor-056u.jpg", mfk:true },
      { name:"MANUFAKTUR 그라파이트 그레이", img:P + "color-041u.jpg", imgMb:P + "mbcolor-041u.jpg", mfk:true },
      { name:"MANUFAKTUR 실리콘 그레이 솔리드", img:P + "color-190u.jpg", imgMb:P + "mbcolor-190u.jpg", mfk:true },
      { name:"MANUFAKTUR 베르데 실버 마그노", img:P + "color-378u.jpg", imgMb:P + "mbcolor-378u.jpg", mfk:true },
      { name:"MANUFAKTUR 미스틱 블루", img:P + "color-032u.jpg", imgMb:P + "mbcolor-032u.jpg", mfk:true },
      { name:"MANUFAKTUR 빈티지 블루", img:P + "color-934u.jpg", imgMb:P + "mbcolor-934u.jpg", mfk:true },
      { name:"MANUFAKTUR 올리브 메탈릭", img:P + "color-255u.jpg", imgMb:P + "mbcolor-255u.jpg", mfk:true },
      { name:"MANUFAKTUR 칼라하리 골드 메탈릭", img:P + "color-802u.jpg", imgMb:P + "mbcolor-802u.jpg", mfk:true },
      { name:"MANUFAKTUR 칼라하리 골드 마그노", img:P + "color-677u.jpg", imgMb:P + "mbcolor-677u.jpg", mfk:true },
      { name:"MANUFAKTUR 파타고니아 레드", img:P + "color-993u.jpg", imgMb:P + "mbcolor-993u.jpg", mfk:true },
      /* 마이바흐 투톤 — 마이바흐 트림을 고르면 보인다 */
      { name:"마이바흐 투톤, 옵시디안 블랙 / 셀레나이트 그레이", img:P + "tone-c12.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 옵시디안 블랙 / 칼라하리 골드", img:P + "tone-c23.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 에메랄드 그린 / 모하비 실버", img:P + "tone-c24.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 노틱 블루 / 하이-테크 실버", img:P + "tone-c28.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 하이-테크 실버 / 셀레나이트 그레이", img:P + "tone-c31.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 옵시디안 블랙 / 하이-테크 실버", img:P + "tone-c33.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 오팔라이트 화이트 / 옵시디안 블랙", img:P + "tone-c37.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 오팔라이트 화이트 / 베르데 실버", img:P + "tone-c38.jpg", only:"Maybach" },
      { name:"마이바흐 투톤, 옵시디안 블랙 / 벨벳 브라운", img:P + "tone-c41.jpg", only:"Maybach" }
    ]
  };
})();
