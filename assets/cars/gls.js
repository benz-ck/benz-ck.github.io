/* ─────────────────────────────────────────────────────────
   GLS 구성 페이지 자료 (model.html?m=GLS) — GLS 6트림 + 마이바흐 GLS 2트림
   - 트림 구성 · 휠 · 시트 · 트림: MY26 GLS Order Guideline V9 (2026-03)
   - 사양 비교 · 제원(출력 · 연비 · 중량 · 크기), 사진 · 색상: GLS 카탈로그(2026-01-28, 26년식) · 마이바흐 GLS 카탈로그(2025-11-24)
     (Premium 트림 · 마이바흐 MANUFAKTUR 는 인증 제원이 따로 없어 같은 엔진 트림 값)
   - 가격: 2026-10-20 공식 가격표(26년식). 27년식 GLS 는 아직 자료가 없다
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/gls/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLS"] = (function(){
  var P = "images/cars/gls/";
  var NOPROMO = PRICE_MONTH + "월 프로모션 공문에 따로 나오지 않는 트림이라 조건은 문의 주세요.";
  return {
    name: "GLS",
    badge: "26년식 GLS · Mercedes-Maybach GLS",
    tagline: "SUV 의 S-Class.<br>GLS 6트림과 마이바흐 GLS 2트림을 한눈에.",
    asof: "MY26 GLS 오더 가이드라인 2026년 3월 · 카탈로그 2026년 1월",
    source: "MY26 GLS 오더 가이드라인(2026년 3월) · GLS 카탈로그(2026년 1월, 26년식) · 마이바흐 GLS 카탈로그(2025년 11월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-5.jpg", P + "hero-4.jpg", P + "hero-3.jpg"],
    bodies: { SUV: "대형 SUV", MB: "마이바흐" },
    extraRows: /^Maybach GLS/,
    lines: { "AMG Line": P + "line-gls.jpg", "Mercedes-AMG": P + "line-63.jpg", "Maybach": P + "line-mb.jpg", "MANUFAKTUR": P + "line-mbm.jpg" },

    trims: [
      { id:"gls450d", name:"GLS 450 d 4MATIC AMG Line", short:"GLS 450 d 4M", body:"SUV", line:"AMG Line", price:154000000, row:"26|GLS 450 d 4M",
        engine:"om656", wheel:"rpa", upholstery:"leather", wood:"h31", highlights:["디젤 복합연비 10.0km/ℓ", "에어매틱 패키지", "나이트 패키지"] },
      { id:"gls450", name:"GLS 450 4MATIC AMG Line", short:"GLS 450 4M", body:"SUV", line:"AMG Line", price:154000000, row:"26|GLS 450 4M AMG Line",
        engine:"m256", wheel:"rpa", upholstery:"leather", wood:"h31", highlights:["직렬 6기통 381마력", "에어매틱 패키지", "나이트 패키지"] },
      { id:"gls450dp", name:"GLS 450 d 4MATIC AMG Line Premium", short:"GLS 450 d 4M Premium", body:"SUV", line:"AMG Line", price:158500000, row:"", dealNote:NOPROMO,
        engine:"om656", wheel:"rpa", upholstery:"nappa", wood:"h31", highlights:["나파 가죽 시트", "우드 · 가죽 스티어링 휠", "온도 조절 컵홀더"] },
      { id:"gls450p", name:"GLS 450 4MATIC AMG Line Premium", short:"GLS 450 4M Premium", body:"SUV", line:"AMG Line", price:158500000, row:"", dealNote:NOPROMO,
        engine:"m256", wheel:"rpa", upholstery:"nappa", wood:"h31", highlights:["나파 가죽 시트", "우드 · 가죽 스티어링 휠", "브랜드 로고 프로젝션"] },
      { id:"gls580", name:"GLS 580 4MATIC AMG Line", short:"GLS 580 4M", body:"SUV", line:"AMG Line", price:193400000, row:"26|GLS 580 4M",
        engine:"m177", wheel:"rpq", upholstery:"nappa580", wood:"h31", highlights:["V8 517마력", "MBUX 뒷좌석 엔터테인먼트", "23인치 AMG 휠"] },
      { id:"gls63", name:"Mercedes-AMG GLS 63 4MATIC+", short:"AMG GLS 63", body:"SUV", line:"Mercedes-AMG", price:210000000, row:"26|AMG GLS 63 4M+",
        engine:"m177amg", wheel:"rpc", upholstery:"amg", wood:"h86", highlights:["AMG V8 612마력", "AMG 라이드 컨트롤+ 서스펜션", "AMG 카본파이버 트림"] },
      { id:"mb600", name:"Mercedes-Maybach GLS 600 4MATIC", short:"Maybach GLS 600", body:"MB", line:"Maybach", price:295000000, row:"26|Maybach GLS 600",
        engine:"m177mb", wheel:"r65", upholstery:"mb", wood:"h11", highlights:["E-액티브 바디 컨트롤", "부메스터® 하이엔드 3D 사운드", "전동식 러닝보드"] },
      { id:"mb600m", name:"Mercedes-Maybach GLS 600 4MATIC MANUFAKTUR", short:"Maybach GLS 600 MANUFAKTUR", body:"MB", line:"MANUFAKTUR", price:337000000, row:"26|Maybach GLS 600 MANUFAKTUR",
        engine:"m177mb", wheel:"r53", upholstery:"mb", wood:"h11", highlights:["MANUFAKTUR 익스클루시브 가죽 패키지", "마이바흐 투톤 페인트", "23인치 마이바흐 5 스포크 단조 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Option list · 장비 설명) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "6기통 디젤", "6기통 가솔린", "6기통 디젤", "6기통 가솔린", "V8 가솔린", "V8 가솔린 (AMG)", "V8 가솔린", "V8 가솔린"],
        ["변속기", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "AMG SPEEDSHIFT TCT 9G", "9G-TRONIC", "9G-TRONIC"],
        ["서스펜션", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "에어매틱", "AMG 라이드 컨트롤+", "에어매틱 + E-액티브 바디 컨트롤", "에어매틱 + E-액티브 바디 컨트롤"],
        ["구동", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "AMG 4MATIC+", "4MATIC", "4MATIC"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AMG Line", "AMG Line", "AMG Line", "AMG Line", "AMG Line", "Mercedes-AMG", "Maybach", "Maybach"],
        ["휠", "22인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크", "22인치 AMG 멀티 스포크", "23인치 AMG 5 트윈 스포크", "22인치 AMG 멀티 스포크", "23인치 마이바흐 멀티스포크 단조", "23인치 마이바흐 5 스포크 단조"],
        ["나이트 패키지", "S", "S", "S", "S", "S", "-", "-", "-"],
        ["러닝보드", "알루미늄", "알루미늄", "알루미늄", "알루미늄", "알루미늄", "알루미늄", "전동식", "전동식"],
        ["브랜드 로고 프로젝션", "-", "-", "S", "S", "S", "S", "S", "S"],
        ["외장 색상", "단색 5가지", "단색 5가지", "단색 5가지", "단색 5가지", "단색 5가지", "단색 5가지", "단색 6가지", "마이바흐 투톤"],
        ["파노라믹 선루프 · 멀티빔 LED · 어쿠스틱 컴포트 패키지", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "가죽", "가죽", "나파 가죽", "나파 가죽", "나파 가죽", "AMG 익스클루시브 나파 가죽", "익스클루시브 나파 가죽", "익스클루시브 나파 가죽"],
        ["인테리어 패키지", "AMG Line", "AMG Line", "AMG Line", "AMG Line", "AMG Line", "Mercedes-AMG", "MANUFAKTUR 가죽 패키지", "MANUFAKTUR 익스클루시브 가죽 패키지"],
        ["트림", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "앤트러사이트 오픈 포어 오크 우드", "AMG 카본파이버", "MANUFAKTUR 블랙 피아노 라커", "MANUFAKTUR 블랙 피아노 라커"],
        ["스티어링 휠", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능, 우드 · 가죽", "다기능, 우드 · 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽", "다기능, 우드 · 가죽", "다기능, 우드 · 가죽"],
        ["온도 조절 컵홀더", "-", "-", "S", "S", "S", "S", "S", "S"],
        ["MBUX 뒷좌석 엔터테인먼트 (11.6인치 2개)", "-", "-", "-", "-", "S", "S", "S", "S"],
        ["앞 · 뒷좌석 멀티컨투어 시트 · 메모리", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["앞 · 뒷좌석 통풍 시트 · 자동 온도 조절 (앞 2존 · 뒤 3존)", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 컴포트 패키지 플러스 (MBUX 뒷좌석 태블릿 · 무선 충전)", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["에어백", "9개", "9개", "9개", "9개", "9개", "9개", "9개 + 뒷좌석 사이드백", "9개 + 뒷좌석 사이드백"],
        ["드라이빙 어시스턴스 패키지 · 360° 카메라 · 투명 보닛", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["디스플레이", "12.3 + 10.25인치", "12.3 + 10.25인치", "12.3 + 10.25인치", "12.3 + 10.25인치", "12.3 + 10.25인치", "12.3 + 10.25인치", "12.3 + 12.3인치", "12.3 + 12.3인치"],
        ["MBUX 증강현실 내비게이션 · 헤드업 디스플레이", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["사운드 시스템", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 하이엔드 3D 서라운드", "부메스터® 하이엔드 3D 서라운드"],
        ["키레스 고 · 파워 클로징 · 공기 청정 패키지", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "26년식 카탈로그 · 오더 가이드라인 기준입니다. 26년식은 MANUFAKTUR 단색 외장 색상 선택이 끝났고(1월 생산분부터), 나이트 패키지는 9월 생산분부터 기본입니다.",

    engineNote: "GLS 에는 2세대 통합 스타터 제너레이터(ISG)를 단 48V EQ 부스트가 들어가 최대 15kW · 200Nm 를 보탭니다(카탈로그). 전 트림 사륜구동 · 9단 자동변속기.",
    engines: {
      om656: { name:"OM 656 M", kind:"직렬 6기통 디젤 + 48V EQ 부스트", chips:["2,989cc", "367마력", "76.5kg·m"],
               desc:"메르세데스-벤츠에서 가장 강력한 디젤 엔진. <b>복합연비 10.0km/ℓ (4등급)</b>로 GLS 중 가장 효율적입니다." },
      m256: { name:"M 256 M", kind:"직렬 6기통 가솔린 + 48V EQ 부스트", chips:["2,998cc", "381마력", "0→100 6.1초"],
              desc:"부드럽고 조용한 6기통 가솔린. 디젤과 같은 가격이라 <b>정숙성을 먼저 보시는 분</b>께 맞습니다." },
      m177: { name:"M 177", kind:"4.0리터 V8 가솔린 + 48V 마일드 하이브리드", chips:["3,982cc", "517마력", "0→100 4.9초"],
              desc:"GLS 580 의 V8. 트윈 스크롤 터보가 반응을 빠르게 하고 마일드 하이브리드가 효율을 거듭니다." },
      m177amg: { name:"M 177 (AMG)", kind:"AMG 4.0리터 V8 바이터보", chips:["612마력", "86.7kg·m", "0→100 4.2초"],
              desc:"AMG GLS 63 의 엔진. <b>최고속도 280km/h</b>, AMG SPEEDSHIFT TCT 9G 와 AMG 라이드 컨트롤+ 가 짝을 이룹니다." },
      m177mb: { name:"M 177 (Maybach)", kind:"V8 가솔린 + 48V EQ 부스트", chips:["557마력", "78.5kg·m", "0→100 4.9초"],
              desc:"마이바흐 GLS 600 의 V8. 에어매틱에 <b>E-액티브 바디 컨트롤</b>이 더해져 뒷좌석 승차감을 끝까지 다듬었습니다." }
    },

    specs: { rows: [
      ["엔진", "OM 656 M", "M 256 M", "OM 656 M", "M 256 M", "M 177", "M 177 (AMG)", "M 177", "M 177"],
      ["배기량", "2,989cc", "2,998cc", "2,989cc", "2,998cc", "3,982cc", "3,982cc", "3,982cc", "3,982cc"],
      ["최고출력", "367마력", "381마력", "367마력", "381마력", "517마력", "612마력", "557마력", "557마력"],
      ["최대토크", "76.5kg·m", "51.0kg·m", "76.5kg·m", "51.0kg·m", "74.4kg·m", "86.7kg·m", "78.5kg·m", "78.5kg·m"],
      ["0→100km/h", "6.1초", "6.1초", "6.1초", "6.1초", "4.9초", "4.2초", "4.9초", "4.9초"],
      ["최고속도", "250km/h", "250km/h", "250km/h", "250km/h", "250km/h", "280km/h", "250km/h", "250km/h"],
      ["복합연비 (등급)", "10.0km/ℓ (4등급)", "7.9km/ℓ (5등급)", "10.0km/ℓ (4등급)", "7.9km/ℓ (5등급)", "6.6km/ℓ (5등급)", "6.3km/ℓ (5등급)", "6.4km/ℓ (5등급)", "6.4km/ℓ (5등급)"],
      ["도심 · 고속 연비", "9.1 · 11.4km/ℓ", "7.2 · 8.9km/ℓ", "9.1 · 11.4km/ℓ", "7.2 · 8.9km/ℓ", "5.9 · 7.8km/ℓ", "5.7 · 7.4km/ℓ", "5.6 · 7.5km/ℓ", "5.6 · 7.5km/ℓ"],
      ["CO₂ 배출", "194g/km", "219g/km", "194g/km", "219g/km", "263g/km", "275g/km", "274g/km", "274g/km"],
      ["공차중량", "2,630kg", "2,545kg", "2,630kg", "2,545kg", "2,640kg", "2,685kg", "2,825kg", "2,825kg"],
      ["전장 · 전폭 · 전고", "5,210 · 2,030 · 1,840mm", "5,210 · 2,030 · 1,830mm", "5,210 · 2,030 · 1,840mm", "5,210 · 2,030 · 1,830mm", "5,210 · 2,030 · 1,840mm", "5,245 · 2,030 · 1,837mm", "5,210 · 2,030 · 1,840mm", "5,210 · 2,030 · 1,840mm"],
      ["휠베이스 · 최소회전반경", "3,135mm · 6.27m", "3,135mm · 6.27m", "3,135mm · 6.27m", "3,135mm · 6.27m", "3,135mm · 6.27m", "3,135mm · 6.55m", "3,135mm · 6.27m", "3,135mm · 6.27m"],
      ["트렁크", "355~2,400ℓ", "355~2,400ℓ", "355~2,400ℓ", "355~2,400ℓ", "355~2,400ℓ", "355~2,400ℓ", "520ℓ", "520ℓ"]
    ] },
    specNote: "26년식 카탈로그의 인증 차량 제원입니다. Premium 두 트림과 마이바흐 GLS 600 MANUFAKTUR 는 인증 제원이 따로 없어 같은 엔진 트림 값을 적었습니다. 트렁크 355ℓ는 3열을 세웠을 때, 2,400ℓ는 2 · 3열을 접었을 때입니다.",

    wheels: {
      rpa: { name:"22인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rpa.jpg" },
      rpq: { name:"23인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rpq.jpg" },
      rpc: { name:"22인치 AMG 멀티 스포크 경량 알로이 휠 (AMG)", img:P + "wheel-rpc.jpg" },
      r65: { name:"23인치 마이바흐 멀티스포크 단조 휠", img:P + "wheel-r65.jpg" },
      r53: { name:"23인치 마이바흐 5 스포크 단조 휠", img:P + "wheel-r53.jpg" }
    },
    upholstery: {
      leather: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-black.jpg" },
        { name:"투톤 마키아토 베이지 / 블랙", img:P + "seat-leather-macchiato.jpg" },
        { name:"바히아 브라운 / 블랙", img:P + "seat-leather-bahia.jpg" },
        { name:"카탈라나 베이지 / 블랙", img:P + "seat-leather-catalana.jpg" } ]},
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-nappa-black.jpg" } ]},
      nappa580: { name:"나파 가죽 (가죽 4색 무료 선택)", colors:[
        { name:"나파 블랙", img:P + "seat-nappa-black.jpg" },
        { name:"가죽 블랙", img:P + "seat-leather-black.jpg" },
        { name:"가죽 투톤 마키아토 베이지 / 블랙", img:P + "seat-leather-macchiato.jpg" },
        { name:"가죽 바히아 브라운 / 블랙", img:P + "seat-leather-bahia.jpg" },
        { name:"가죽 카탈라나 베이지 / 블랙", img:P + "seat-leather-catalana.jpg" } ]},
      amg: { name:"AMG 익스클루시브 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-amg-macchiato.jpg" },
        { name:"바히아 브라운 / 블랙", img:P + "seat-amg-bahia.jpg" } ]},
      mb: { name:"익스클루시브 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-mb-black.jpg" },
        { name:"자바", img:P + "seat-mb-java.jpg" } ]}
    },
    woods: {
      h31: { name:"앤트러사이트 오픈 포어 오크 우드 트림", img:P + "wood-h31.jpg" },
      h86: { name:"AMG 카본파이버 트림", img:P + "wood-h86.jpg" },
      h11: { name:"MANUFAKTUR 플로잉 라인 블랙 피아노 라커 트림", img:P + "wood-h11.jpg" }
    },
    /* GLS · AMG GLS 단색 5가지(마이바흐 GLS 600 도 같은 5가지 + 오팔라이트 화이트), MANUFAKTUR 는 마이바흐 투톤 4가지 */
    colors: (function(){
      function c(name, code){ return { name:name, img:P + "color-" + code + ".jpg", not:"MANUFAKTUR",
        lineImg:{ "Mercedes-AMG": P + "amg-" + code + ".jpg", "Maybach": P + "mb-" + code + ".jpg" } }; }
      function t(name, code, note){ var o = { name:name, img:P + "mb-" + code + ".jpg", only:"MANUFAKTUR" }; if (note) o.name += " (" + note + ")"; return o; }
      return [
        c("옵시디안 블랙", "197u"), c("폴라 화이트", "149u"), c("소달라이트 블루", "842u"), c("하이 테크 실버", "922u"), c("셀레나이트 그레이", "992u"),
        { name:"MANUFAKTUR 오팔라이트 화이트 브라이트", img:P + "mb-885u.jpg", mfk:true, only:"Maybach" },
        t("마이바흐 투톤, 하이 테크 실버 / 노틱 블루", "c20", "현재 생산 이슈로 선택 불가"),
        t("마이바흐 투톤, 옵시디안 블랙 / 루벨라이트 레드", "c21"),
        t("마이바흐 투톤, 옵시디안 블랙 / MANUFAKTUR 칼라하리 골드", "c23"),
        t("마이바흐 투톤, 하이 테크 실버 / 옵시디안 블랙", "c35")
      ];
    })()
  };
})();
