/* ─────────────────────────────────────────────────────────
   EQE 구성 페이지 자료 (model.html?m=EQE) — 세단 EQE 350+ · SUV EQE 350+ SUV · EQE 500 4MATIC SUV
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY26 EQE 오더 가이드라인 V1(2025-06) · MY26 EQE SUV 오더 가이드라인 V2(2026-02)
   - 사양 · 사진: EQE 카탈로그(2026-04-29) · EQE SUV 카탈로그(2026-04-24), 26년식
   - 제원: 두 카탈로그에 제원 쪽이 없어 어프로치 북(2026-07, 26년식) 값
   - 가격: 2026-10-20 공식 가격표(26년식). AMG EQE 는 가격표에 없어 넣지 않았다.
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만).
   사진은 images/cars/eqe/ (세단 s- · SUV u- 색상) — 바꿀 때는 새 파일명으로.
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["EQE"] = (function(){
  var P = "images/cars/eqe/";
  return {
    name: "EQE",
    badge: "26년식 EQE · EQE SUV",
    tagline: "E-Class 급 전기차.<br>세단 EQE 350+ 와 SUV 두 가지를 한눈에.",
    asof: "MY26 EQE · EQE SUV 오더 가이드라인 · 카탈로그 2026년 4월",
    source: "MY26 EQE 오더 가이드라인(2025년 6월) · MY26 EQE SUV 오더 가이드라인(2026년 2월) · EQE 카탈로그 · EQE SUV 카탈로그(2026년 4월, 26년식) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-3.jpg", P + "hero-2.jpg", P + "hero-5.jpg", P + "hero-6.jpg", P + "hero-4.jpg"],
    bodies: { SEDAN: "세단", SUV: "SUV" },
    diffByBody: true,
    lines: { "AMG Line|SEDAN": P + "line-sedan.jpg", "Electric Art": P + "line-suv-ea.jpg", "AMG Line|SUV": P + "line-suv-amg.jpg" },

    trims: [
      { id:"eqe350", name:"EQE 350+", short:"EQE 350+", body:"SEDAN", line:"AMG Line", price:110000000, row:"26|EQE 350+",
        engine:"eqe350", wheel:"rrh", upholstery:"leather_s", wood:"t51h", highlights:["1회 충전 490km", "리어 액슬 스티어링 4.5°", "디지털 라이트"] },
      { id:"eqe350suv", name:"EQE 350+ SUV", short:"EQE 350+ SUV", body:"SUV", line:"Electric Art", price:106000000, row:"26|EQE 350+ SUV",
        engine:"eqe350suv", wheel:"r61", upholstery:"neotex", wood:"t51h", highlights:["에어매틱", "트렁크 최대 1,675ℓ", "디스플레이 패키지"] },
      { id:"eqe500suv", name:"EQE 500 4MATIC SUV", short:"EQE 500 4M SUV", body:"SUV", line:"AMG Line", price:141000000, row:"26|EQE 500 4M SUV",
        engine:"eqe500suv", wheel:"rwx", upholstery:"leather_u", wood:"th08", highlights:["402마력 4MATIC", "MBUX 하이퍼스크린", "리어 액슬 스티어링 10°"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음. 세단 · SUV 는 따로 비교(diffByBody) */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["구동", "후륜구동", "후륜구동", "4MATIC 사륜구동"],
        ["서스펜션", "에어매틱", "에어매틱", "에어매틱"],
        ["리어 액슬 스티어링", "4.5°", "유료 옵션 (10°)", "10°"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AMG Line", "Electric Art", "AMG Line"],
        ["휠", "19인치 AMG 5 트윈 스포크", "20인치 5 스포크", "21인치 AMG 멀티 스포크"],
        ["투명 보닛", "-", "S", "S"],
        ["디지털 라이트 · 메르세데스-벤츠 패턴 라디에이터 그릴", "S", "S", "S"],
        ["파노라믹 선루프", "S", "S", "S"],
        ["키레스 고 · 전동 트렁크", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "가죽", "NEOTEX / ARTICO", "가죽"],
        ["앞좌석 멀티컨투어 시트", "-", "-", "S"],
        ["트림", "레이저 컷 백릿 트림", "레이저 컷 백릿 트림", "앤트러사이트 라임 우드"],
        ["자동 온도 조절", "2존", "4존", "4존"],
        ["어쿠스틱 컴포트 패키지", "-", "-", "S"],
        ["앞좌석 열선 · 통풍 시트 · 메모리, 뒷좌석 열선 시트", "S", "S", "S"],
        ["다기능 열선 스티어링 휠 · 액티브 앰비언트 라이트", "S", "S", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["디스플레이", "디스플레이 패키지", "디스플레이 패키지 (12.3 + 12.8인치 OLED)", "MBUX 하이퍼스크린"],
        ["헤드업 디스플레이", "-", "유료 옵션", "S"],
        ["사운드 시스템", "어드밴스드 사운드", "어드밴스드 사운드", "부메스터® 3D 서라운드 (15스피커 · 710W)"],
        ["MBUX 증강 현실 내비게이션 · 앞좌석 무선 충전", "S", "S", "S"],
        ["드라이빙 어시스턴스 패키지 플러스", "S", "S", "S"],
        ["360° 카메라가 포함된 주차 패키지", "S", "S", "S"],
        ["공기 청정 패키지", "S", "S", "S"]
      ]}
    ],
    featureNote: "26년식 카탈로그 · 오더 가이드라인 기준입니다. 세단과 SUV 는 차체가 달라 따로 비교합니다(EQE 500 4MATIC SUV 는 EQE 350+ SUV 대비). 유료 옵션은 주문 시 추가 비용이 붙습니다.",

    engineNote: "EQE 350+ 는 뒷바퀴를 굴리는 전기 모터 하나, EQE 500 4MATIC SUV 는 앞뒤 전기 모터의 사륜구동입니다. 세 트림 모두 에어매틱 에어 서스펜션이 기본입니다.",
    engines: {
      eqe350: { name:"EQE 350+", kind:"전기 모터 · 후륜구동 (세단)", chips:["288마력", "88.8kWh", "1회 충전 490km"],
                desc:"EQE 가운데 <b>주행거리가 가장 긴</b> 트림(490km). 복합 전비 4.6km/kWh 에 리어 액슬 스티어링 4.5°가 기본입니다." },
      eqe350suv: { name:"EQE 350+ SUV", kind:"전기 모터 · 후륜구동 (SUV)", chips:["288마력", "90kWh", "1회 충전 467km"],
                desc:"1,000mm 넘는 헤드룸과 최대 1,675ℓ 트렁크. EQE 가운데 <b>가장 합리적인 가격</b>의 트림입니다." },
      eqe500suv: { name:"EQE 500 4MATIC SUV", kind:"전기 모터 · 4MATIC 사륜구동 (SUV)", chips:["402마력", "96kWh", "0→100 4.9초"],
                desc:"앞뒤 모터의 사륜구동에 리어 액슬 스티어링 10°, MBUX 하이퍼스크린 · 부메스터® 3D 사운드까지 <b>모두 기본</b>입니다." }
    },

    specs: { rows: [
      ["최고출력", "288마력", "288마력", "402마력"],
      ["최대토크", "57.6kg·m", "—", "88kg·m"],
      ["배터리", "88.8kWh", "90kWh", "96kWh"],
      ["1회 충전 주행거리 (복합)", "490km", "467km", "440km"],
      ["복합 전비", "4.6km/kWh", "4.2km/kWh", "4.0km/kWh"],
      ["도심 · 고속 전비", "4.7 · 4.4km/kWh", "4.4 · 4.0km/kWh", "4.1 · 3.8km/kWh"],
      ["0→100km/h", "6.4초", "6.6초", "4.9초"],
      ["최고속도", "210km/h", "210km/h", "210km/h"],
      ["구동", "후륜구동", "후륜구동", "4MATIC 사륜구동"],
      ["공차중량", "2,405kg", "2,475kg", "2,600kg"],
      ["전장 · 전폭 · 전고", "4,965 · 1,905 · 1,510mm", "4,870 · 1,920 · 1,705mm", "4,870 · 1,925 · 1,710mm"],
      ["트렁크", "430ℓ", "520~1,675ℓ", "520~1,675ℓ"]
    ] },
    specNote: "EQE · EQE SUV 카탈로그에는 제원 쪽이 없어 어프로치 북(2026년 7월, 26년식) 값을 적었습니다. EQE 350+ SUV 의 최대토크(—)는 공식 자료로 확인되는 대로 채워 넣겠습니다. 전비 · 주행거리는 기온 · 도로 · 운전 습관에 따라 달라집니다.",

    wheels: {
      rrh: { name:"19인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rrh.jpg" },
      r61: { name:"20인치 5 스포크 경량 알로이 휠", img:P + "wheel-r61.jpg" },
      rwx: { name:"21인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rwx.jpg" }
    },
    upholstery: {
      leather_s: { name:"가죽", colors:[
        { name:"블랙 / 스페이스 그레이", img:P + "seat-201a.jpg" },
        { name:"네바 그레이 / 발라오 브라운 (유료 옵션)", img:P + "seat-209a.jpg" },
        { name:"블랙 / 발라오 브라운 (유료 옵션)", img:P + "seat-211a.jpg" },
        { name:"네바 그레이 / 비스케이 블루 (유료 옵션)", img:P + "seat-219a.jpg" },
        { name:"블랙 / 비스케이 블루 (유료 옵션)", img:P + "seat-221a.jpg" } ]},
      neotex: { name:"NEOTEX / ARTICO", colors:[
        { name:"블랙 / 발라오 브라운", img:P + "seat-121a.jpg" },
        { name:"블랙 / 스페이스 그레이", img:P + "seat-111a.jpg" },
        { name:"네바 그레이 / 발라오 브라운", img:P + "seat-109a.jpg" },
        { name:"네바 그레이 / 비스케이 블루", img:P + "seat-119a.jpg" },
        { name:"블랙 / 비스케이 블루", img:P + "seat-131a.jpg" } ]},
      leather_u: { name:"가죽", colors:[
        { name:"블랙 / 발라오 브라운", img:P + "u-seat-211a.jpg" },
        { name:"블랙 / 스페이스 그레이", img:P + "u-seat-201a.jpg" },
        { name:"네바 그레이 / 발라오 브라운", img:P + "u-seat-209a.jpg" },
        { name:"네바 그레이 / 비스케이 블루", img:P + "u-seat-219a.jpg" },
        { name:"블랙 / 비스케이 블루", img:P + "u-seat-221a.jpg" } ]}
    },
    woods: {
      t51h: { name:"레이저 컷 백릿 트림, 메르세데스-벤츠 패턴", img:P + "trim-51h.jpg" },
      th51: { name:"블랙 파인 스트럭처룩 트림", img:P + "trim-h51.jpg", note:"EQE 350+ SUV 무료 선택" },
      th20: { name:"브라운 오픈 포어 마그놀리아 우드 트림, 메르세데스-벤츠 패턴", img:P + "trim-h20.jpg", note:"EQE 350+ SUV 유료 옵션" },
      th08: { name:"앤트러사이트 라임 우드 트림", img:P + "trim-h08.jpg" }
    },
    extraCfg: [
      { title:"센터 콘솔", sub:"트림에 따라", items:[
        { name:"하이 글로스 블랙", img:P + "cons-757.jpg", note:"EQE 350+ · 350+ SUV 기본" },
        { name:"블랙 파인 스트럭처룩", img:P + "cons-661.jpg", note:"유료 옵션" },
        { name:"앤트러사이트 라임 우드", img:P + "cons-775.jpg", note:"EQE 500 4MATIC SUV 기본" } ]},
      { title:"루프 라이너", sub:"블랙 · 네바 그레이", items:[
        { name:"블랙", img:P + "liner-51u.jpg", note:"기본" },
        { name:"네바 그레이", img:P + "liner-59u.jpg", note:"무료 선택" },
        { name:"MICROCUT 블랙", img:P + "liner-61u.jpg", note:"SUV 유료 옵션" } ]}
    ],
    /* 세단 7가지 · SUV 7가지 — 같은 색은 차체에 맞는 사진으로 */
    colors: (function(){
      function c(name, code){ return { name:name, img:P + "s-" + code + ".jpg", lineImg:{ SUV: P + "u-" + code + ".jpg" } }; }
      return [
        c("옵시디안 블랙", "197u"), c("폴라 화이트", "149u"), c("블랙", "040u"),
        c("소달라이트 블루", "842u"), c("하이 테크 실버", "922u"), c("셀레나이트 그레이", "992u"),
        { name:"그라파이트 그레이", img:P + "s-831u.jpg", only:"SEDAN" },
        { name:"벨벳 브라운", img:P + "u-771u.jpg", only:"SUV" }
      ];
    })()
  };
})();
