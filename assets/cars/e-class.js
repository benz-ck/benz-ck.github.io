/* ─────────────────────────────────────────────────────────
   E-Class 구성 페이지 자료 (model.html?m=E-Class)
   - 트림 구성 · 사양 비교 · 최고출력: MY27 E-Class 제품정보 v4 (2026-09, Specification · Product line-up)
   - 토크 · 0→100 · 연비 · 중량 · 크기, 사진 · 휠 · 시트 · 우드 · 색상: E-Class 카탈로그(2025-12-23, 26년식) · AMG E-Class 카탈로그(2025-12-17)
     (27년식과 엔진이 같다. 휠 · 서스펜션 구성이 인증 차량과 다른 트림은 연비 · 중량을 비워 둔다)
   - 가격: 2026-10-20 공식 가격표. E 200 두 트림은 27년식 가격이 아직 없어 26년식 가격
   제품정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/e-class/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["E-Class"] = (function(){
  var P = "images/cars/e-class/";
  return {
    name: "E-Class",
    badge: "27년식 The new E-Class",
    tagline: "가장 많이 찾으시는 비즈니스 세단.<br>E 200부터 AMG E 53 HYBRID까지 10트림을 한눈에.",
    asof: "MY27 제품정보 2026년 9월",
    source: "MY27 E-Class 제품정보(2026년 9월) · E-Class 카탈로그(2025년 12월, 26년식) · AMG E-Class 카탈로그(2025년 12월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { RWD: "후륜구동", AWD: "4MATIC 사륜구동" },
    lines: { "EXCLUSIVE": P + "line-exclusive.jpg", "AMG Line": P + "line-amg.jpg", "AVANTGARDE": P + "line-avantgarde.jpg", "Mercedes-AMG": P + "line-e53.jpg" },

    /* 가격 오름차순 — row 는 PRICE_ROWS 의 "연식|트림", alt 는 같은 트림의 26년식 재고 조건 */
    trims: [
      { id:"e200ex",  name:"E 200 EXCLUSIVE",           short:"E 200 EXCLUSIVE",      body:"RWD", line:"EXCLUSIVE",  price:77500000,  priceNote:"26년식 가격 · 27년식 가격 미발표", row:"26|E 200 Exclusive",
        engine:"m254", wheel:"r10", upholstery:"artico", wood:"ash",   highlights:["헤드업 디스플레이", "통풍 시트", "360° 카메라 주차 패키지"] },
      { id:"e200amg", name:"E 200 AMG Line",            short:"E 200 AMG Line",       body:"RWD", line:"AMG Line",   price:81000000,  priceNote:"26년식 가격 · 27년식 가격 미발표", row:"26|E 200 AMG Line",
        engine:"m254", wheel:"rte", upholstery:"artico", wood:"ash",   highlights:["헤드업 디스플레이", "통풍 시트", "파노라믹 선루프"] },
      { id:"e220d",   name:"E 220 d 4MATIC AVANTGARDE", short:"E 220 d 4M AVANTGARDE", body:"AWD", line:"AVANTGARDE", price:87500000,  row:"27|E 220 d 4M AV", alt:["26|E 220 d 4M"],
        engine:"om654", wheel:"r10", upholstery:"artico", wood:"ash",  highlights:["헤드업 디스플레이", "통풍 시트", "360° 카메라 주차 패키지"] },
      { id:"e300ex",  name:"E 300 4MATIC EXCLUSIVE",    short:"E 300 4M EXCLUSIVE",   body:"AWD", line:"EXCLUSIVE",  price:94800000,  row:"27|E 300 4M Exclusive", alt:["26|E 300 4M Exclusive"],
        engine:"m254", wheel:"r97", upholstery:"leather", wood:"maple", highlights:["디지털 라이트", "열 · 소음 차단 글래스", "부메스터® 사운드"] },
      { id:"e300amg", name:"E 300 4MATIC AMG Line",     short:"E 300 4M AMG Line",    body:"AWD", line:"AMG Line",   price:100100000, row:"27|E 300 4M AMG Line", alt:["26|E 300 4M AMG Line"],
        engine:"m254", wheel:"rte", upholstery:"leatherAmg", wood:"piano", highlights:["디지털 라이트", "MBUX 슈퍼스크린", "대형 디스크 브레이크"] },
      { id:"e350e",   name:"E 350 e 4MATIC EXCLUSIVE",  short:"E 350 e 4M EXCLUSIVE", body:"AWD", line:"EXCLUSIVE",  price:101100000, row:"27|E 350 e 4M Exclusive", alt:["26|E 350 e 4M Exclusive"],
        engine:"phev", wheel:"r82", upholstery:"leatherPhev", wood:"maple", highlights:["플러그인 하이브리드 (전기 77km)", "디지털 라이트", "부메스터® 사운드"] },
      { id:"e450c",   name:"E 450 4MATIC AMG Line (컴포트 서스펜션)", short:"E 450 4M AMG Line 컴포트", body:"AWD", line:"AMG Line", price:112200000, row:"27|E 450 4M AMG Line (컴포트 서스펜션)",
        engine:"m256", wheel:"w20", upholstery:"leatherAmg", wood:"piano", highlights:["직렬 6기통 381마력", "부메스터® 4D 사운드", "파워 클로징"] },
      { id:"e450amg", name:"E 450 4MATIC AMG Line",     short:"E 450 4M AMG Line",    body:"AWD", line:"AMG Line",   price:117200000, row:"27|E 450 4M AMG Line", alt:["26|E 450 4M AMG Line"],
        engine:"m256", wheel:"rvr", upholstery:"leatherAmg", wood:"piano", highlights:["에어매틱 서스펜션", "리어 액슬 스티어링", "나이트 패키지 · 블랙 휠"] },
      { id:"e450ex",  name:"E 450 4MATIC EXCLUSIVE",    short:"E 450 4M EXCLUSIVE",   body:"AWD", line:"EXCLUSIVE",  price:129500000, row:"27|E 450 4M Exclusive", alt:["26|E 450 4M Exclusive"],
        engine:"m256", wheel:"rvq", upholstery:"nappa", wood:"piano",   highlights:["에어매틱 서스펜션", "리어 액슬 스티어링", "4존 자동 온도 조절"] },
      { id:"e53",     name:"Mercedes-AMG E 53 HYBRID 4MATIC+", short:"AMG E 53 HYBRID", body:"AWD", line:"Mercedes-AMG", price:149900000, row:"27|AMG E 53 HYBRID 4M+", alt:["26|AMG E 53 4M+"],
        engine:"e53", wheel:"rwc", upholstery:"amgnappa", wood:"piano", highlights:["AMG 라이드 컨트롤 서스펜션", "P2 하이브리드 시스템", "AMG 나이트 패키지 I · II"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (제품정보 Specification) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린", "4기통 가솔린", "4기통 디젤", "4기통 가솔린", "4기통 가솔린", "4기통 가솔린 + 플러그인 하이브리드", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린", "6기통 가솔린 + AMG 하이브리드"],
        ["구동", "후륜구동", "후륜구동", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "4MATIC", "AMG 4MATIC+"],
        ["변속기", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "9G-TRONIC", "AMG SPEEDSHIFT TCT 9단"],
        ["서스펜션", "컴포트", "어질리티 컨트롤", "컴포트", "컴포트", "어질리티 컨트롤", "컴포트", "컴포트", "에어매틱", "에어매틱", "AMG 라이드 컨트롤"],
        ["리어 액슬 스티어링", "-", "-", "-", "-", "-", "-", "-", "2.5°", "2.5°", "2.5°"],
        ["배기 사운드", "-", "스포티 엔진 사운드", "-", "-", "스포티 엔진 사운드", "-", "스포츠 엔진 사운드", "스포츠 엔진 사운드", "-", "AMG 퍼포먼스 사운드"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "EXCLUSIVE", "AMG Line", "AVANTGARDE", "EXCLUSIVE", "AMG Line", "EXCLUSIVE", "AMG Line", "AMG Line", "EXCLUSIVE", "Mercedes-AMG"],
        ["휠", "18인치 5 스포크", "19인치 AMG 5 트윈 스포크", "18인치 5 스포크", "19인치 10 스포크", "19인치 AMG 5 트윈 스포크", "19인치 5 스포크", "20인치", "20인치 AMG 멀티 스포크, 투톤", "20인치 AMG 멀티 스포크", "21인치 AMG 크로스 스포크 단조"],
        ["스페어 타이어", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏", "타이어핏"],
        ["선루프", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹", "파노라믹"]
      ]},
      { g:"라이트 · 글래스", rows:[
        ["헤드램프", "고성능 LED", "고성능 LED", "고성능 LED", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트", "디지털 라이트"],
        ["상향등 어시스트", "어댑티브", "어댑티브", "어댑티브", "어댑티브 플러스", "어댑티브 플러스", "어댑티브 플러스", "어댑티브 플러스", "어댑티브 플러스", "어댑티브 플러스", "어댑티브 플러스"],
        ["발광 라디에이터 그릴", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["로고 프로젝터", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["앰비언트 라이트", "기본", "기본", "기본", "액티브", "액티브", "액티브", "액티브", "액티브", "액티브", "액티브"],
        ["열 · 소음 차단 글래스", "-", "-", "-", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "ARTICO 가죽", "ARTICO 가죽", "ARTICO 가죽", "가죽", "가죽", "가죽", "가죽", "가죽", "나파 가죽", "AMG 나파 가죽"],
        ["시트 타입", "컴포트", "컴포트", "컴포트", "컴포트", "컴포트", "컴포트", "컴포트", "컴포트", "컴포트", "스포츠"],
        ["우드 트림", "블랙 오픈포어 애쉬우드", "블랙 오픈포어 애쉬우드", "블랙 오픈포어 애쉬우드", "브라운 오픈포어 메이플 우드", "블랙 피아노 라커", "브라운 오픈포어 메이플 우드", "블랙 피아노 라커", "블랙 피아노 라커", "블랙 피아노 라커", "블랙 피아노 라커"],
        ["센터 콘솔", "블랙 오픈포어", "블랙 오픈포어", "블랙 오픈포어", "브라운 오픈포어 메이플", "블랙 오픈포어", "브라운 오픈포어 메이플", "블랙 오픈포어", "블랙 오픈포어", "블랙 오픈포어", "라이트 실버 메탈릭 패브릭"],
        ["스티어링 휠", "다기능, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 나파 가죽", "다기능, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["열선 스티어링 휠", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["나파 룩 ARTICO 대시보드", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 (앞좌석)", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["자동 온도 조절 (뒷좌석)", "-", "-", "-", "-", "-", "-", "-", "-", "S", "S"],
        ["앞좌석 열선 · 통풍 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 열선 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["메모리 패키지 (앞좌석)", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["뒷좌석 접이식 시트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전", rows:[
        ["드라이빙 어시스턴스 패키지 플러스", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 디스턴스 어시스트 디스트로닉", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 브레이크 · 차선 이탈 방지 · 사각지대 어시스트", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["PRE-SAFE® 플러스 · 임펄스 사이드", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["액티브 주차 어시스트 · 파크트로닉 · 360° 카메라", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"MBUX · 인포테인먼트", rows:[
        ["3세대 MBUX · 내비게이션 · 증강현실 내비게이션", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["12.3인치 계기반 · 14.4인치 미디어 디스플레이", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["헤드업 디스플레이", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["MBUX 슈퍼스크린", "-", "-", "-", "유료 옵션", "S", "유료 옵션", "S", "S", "S", "S"],
        ["사운드 시스템", "기본", "기본", "기본", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드", "부메스터® 4D 서라운드"],
        ["스마트폰 통합 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["무선 충전", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석", "앞좌석"],
        ["원격 공조 설정", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"편의", rows:[
        ["키레스 고 · 핸즈프리 액세스 · 전동 트렁크", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"],
        ["파워 클로징", "-", "-", "-", "-", "-", "-", "S", "S", "S", "S"],
        ["에너자이징 패키지", "-", "-", "-", "-", "-", "-", "S", "S", "S", "S"],
        ["MBUX 인테리어 어시스트", "-", "-", "-", "-", "-", "-", "-", "-", "S", "S"],
        ["공기 청정 패키지", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],

    engineNote: "가솔린 엔진에는 2세대 통합형 스타터 제너레이터(ISG)와 48V 마일드 하이브리드가 들어갑니다. E 350 e 는 플러그인 하이브리드, AMG E 53 은 120kW 모터를 더한 AMG 하이브리드입니다.",
    engines: {
      m254: { name:"M 254", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,999cc", "E 200 204마력", "E 300 258마력"],
              desc:"E 200 · E 300 의 직렬 4기통 터보 가솔린. 2세대 ISG 가 출발 · 가속을 거들어 <b>부드럽고 효율적</b>입니다. E 200 은 후륜구동, E 300 은 4MATIC." },
      om654: { name:"OM 654 M", kind:"직렬 4기통 디젤", chips:["1,993cc", "197마력", "44.9kg·m"],
              desc:"라인업에서 토크가 가장 크고 <b>복합연비 16km/ℓ (1등급)</b>로 가장 효율적인 엔진입니다(26년식 E 220 d 4MATIC 인증 기준)." },
      phev: { name:"M 254 + 전기 모터", kind:"플러그인 하이브리드 (EQ Hybrid Technology)", chips:["배터리 19.53kWh", "모터 95kW", "전기 주행 77km"],
              desc:"최대 <b>77km 를 순수 전기로</b> 달리고, 장거리에서는 직렬 4기통 가솔린 엔진을 함께 씁니다. 출퇴근은 전기, 주말 여행은 하이브리드로." },
      m256: { name:"M 256 M", kind:"직렬 6기통 가솔린 + 48V 마일드 하이브리드", chips:["2,999cc", "381마력", "51kg·m"],
              desc:"직렬 6기통 특유의 부드러움에 힘이 넉넉합니다. <b>0→100km/h 4.5초</b>(26년식 E 450 4MATIC 인증 기준)." },
      e53: { name:"M 256 M + AMG 하이브리드", kind:"직렬 6기통 + 120kW 모터 (P2 하이브리드)", chips:["449마력 + 120kW", "57.1kg·m", "0→100km/h 3.8초"],
              desc:"직렬 6기통 M 256 M 엔진과 120kW 전기 모터를 결합한 AMG P2 하이브리드. <b>AMG 퍼포먼스 4MATIC+</b> 사륜구동이 동력을 나눕니다." }
    },

    /* 트림별 제원 — 출력: 27년식 제품정보 / 나머지: 26년식 카탈로그 인증 차량 제원 */
    specs: { rows: [
      ["엔진", "M 254", "M 254", "OM 654 M", "M 254", "M 254", "M 254 + 전기 모터", "M 256 M", "M 256 M", "M 256 M", "M 256 M + 전기 모터"],
      ["형식", "직렬 4기통 가솔린", "직렬 4기통 가솔린", "직렬 4기통 디젤", "직렬 4기통 가솔린", "직렬 4기통 가솔린", "직렬 4기통 PHEV", "직렬 6기통 가솔린", "직렬 6기통 가솔린", "직렬 6기통 가솔린", "직렬 6기통 하이브리드"],
      ["배기량", "1,999cc", "1,999cc", "1,993cc", "1,999cc", "1,999cc", "1,999cc", "2,999cc", "2,999cc", "2,999cc", "2,999cc"],
      ["최고출력", "204마력", "204마력", "197마력", "258마력", "258마력", "204마력 + 모터 95kW", "381마력", "381마력", "381마력", "449마력 + 모터 120kW"],
      ["최대토크", "32.6kg·m", "32.6kg·m", "44.9kg·m", "40.8kg·m", "40.8kg·m", "32.6kg·m", "51.0kg·m", "51.0kg·m", "51.0kg·m", "57.1kg·m"],
      ["0→100km/h", "7.5초", "7.5초", "7.8초", "6.1초", "6.1초", "6.5초", "4.5초", "4.5초", "4.5초", "3.8초"],
      ["최고속도", "240km/h", "240km/h", "234km/h", "250km/h", "250km/h", "230km/h", "250km/h", "250km/h", "250km/h", "250km/h"],
      ["구동 · 변속기", "후륜 · 9G-TRONIC", "후륜 · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC · 9G-TRONIC", "4MATIC+ · AMG TCT 9단"],
      ["복합연비 (등급)", "12.3km/ℓ (3등급)", "—", "—", "11.1km/ℓ (4등급)", "11.1km/ℓ (4등급)", "3.1km/kWh · 11.1km/ℓ", "—", "10.5km/ℓ (4등급)", "10.5km/ℓ (4등급)", "—"],
      ["CO₂ 배출", "136g/km", "—", "—", "153g/km", "153g/km", "27g/km", "—", "162g/km", "162g/km", "—"],
      ["전기 주행거리", "—", "—", "—", "—", "—", "77km", "—", "—", "—", "—"],
      ["공차중량", "1,750kg", "—", "—", "1,905kg", "1,905kg", "2,215kg", "—", "1,955kg", "1,955kg", "—"],
      ["전장 · 전폭 · 전고", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,480mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,955 · 1,880 · 1,475mm", "4,970 · 1,900 · 1,475mm"],
      ["트렁크", "540ℓ", "540ℓ", "540ℓ", "540ℓ", "540ℓ", "370ℓ", "540ℓ", "540ℓ", "540ℓ", "370ℓ"]
    ] },
    specNote: "최고출력은 27년식 제품정보, 토크 · 0→100km/h · 최고속도 · 연비 · 중량 · 크기는 26년식 카탈로그의 인증 차량 제원(같은 엔진)입니다. 휠 · 서스펜션이 카탈로그 인증 차량과 다른 트림(E 200 AMG Line, E 220 d AVANTGARDE, E 450 컴포트 서스펜션, AMG E 53 21인치)은 연비 · CO₂ · 중량을 비워 두었습니다. 참고로 AMG E 53 은 20인치 기준 복합 2.4km/kWh · 8.6km/ℓ, 1회 충전 66km 입니다.",

    wheels: {
      r10: { name:"18인치 5 스포크 경량 알로이 휠", img:P + "wheel-r10.jpg" },
      r97: { name:"19인치 10 스포크 경량 알로이 휠", img:P + "wheel-r97.jpg" },
      r82: { name:"19인치 5 스포크 경량 알로이 휠", img:P + "wheel-r82.jpg" },
      rte: { name:"19인치 AMG 5 트윈 스포크 경량 알로이 휠", img:P + "wheel-rte.jpg" },
      rvq: { name:"20인치 AMG 멀티 스포크 알로이 휠", img:P + "wheel-rvq.jpg" },
      rvr: { name:"20인치 AMG 멀티 스포크 알로이 휠, 투톤", img:P + "wheel-rvr.jpg" },
      w20: { name:"20인치 휠" },
      rwc: { name:"21인치 AMG 크로스 스포크 단조 휠", img:P + "wheel-rwc.jpg" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-artico-black.jpg" },
        { name:"통카 브라운 / 블랙", img:P + "seat-artico-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-artico-beige.jpg" } ]},
      leather: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-black.jpg" },
        { name:"통카 브라운", img:P + "seat-leather-brown.jpg" },
        { name:"마키아토 베이지", img:P + "seat-leather-beige.jpg" } ]},
      leatherAmg: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-amgblack.jpg" },
        { name:"통카 브라운", img:P + "seat-leather-brown.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-leather-beigeblack.jpg" } ]},
      leatherPhev: { name:"가죽", colors:[
        { name:"블랙", img:P + "seat-leather-black.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-leather-beigeblack.jpg" },
        { name:"통카 브라운", img:P + "seat-leather-brown.jpg" },
        { name:"마키아토 베이지", img:P + "seat-leather-beige.jpg" } ]},
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-nappa-black.jpg" },
        { name:"통카 브라운 / 블랙", img:P + "seat-nappa-brown.jpg" },
        { name:"네바 그레이 / 블랙", img:P + "seat-nappa-grey.jpg" } ]},
      amgnappa: { name:"AMG 나파 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"투톤 통카 브라운 / 블랙", img:P + "seat-amg-brown.jpg" },
        { name:"투톤 실버 펄 / 블랙", img:P + "seat-amg-silver.jpg" } ]}
    },
    woods: {
      ash:   { name:"블랙 오픈포어 애쉬우드 트림", img:P + "wood-ash.jpg" },
      maple: { name:"브라운 오픈포어 메이플 우드 알루미늄 라인 트림", img:P + "wood-maple.jpg" },
      piano: { name:"블랙 피아노 라커 트림" }
    },
    /* 카탈로그 「Colours」 — 하이 테크 실버는 AMG E 53 에 없고, 오팔라이트 화이트 마그노는 AMG E 53 만 */
    colors: [
      { name:"폴라 화이트", img:P + "color-149u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-149u.jpg" } },
      { name:"옵시디안 블랙", img:P + "color-197u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-197u.jpg" } },
      { name:"그라파이트 그레이", img:P + "color-831u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-831u.jpg" } },
      { name:"하이 테크 실버", img:P + "color-922u.jpg", not:"Mercedes-AMG" },
      { name:"노틱 블루", img:P + "color-595u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-595u.jpg" } },
      { name:"벨벳 브라운", img:P + "color-771u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-771u.jpg" } },
      { name:"베르데 실버", img:P + "color-188u.jpg" , lineImg:{ "Mercedes-AMG": P + "amgcolor-188u.jpg" } },
      { name:"MANUFAKTUR 오팔라이트 화이트", img:P + "color-885u.jpg", mfk:true , lineImg:{ "Mercedes-AMG": P + "amgcolor-885u.jpg" } },
      { name:"MANUFAKTUR 알파인 그레이", img:P + "color-956u.jpg", mfk:true , lineImg:{ "Mercedes-AMG": P + "amgcolor-956u.jpg" } },
      { name:"MANUFAKTUR 파타고니아 레드", img:P + "color-993u.jpg", mfk:true , lineImg:{ "Mercedes-AMG": P + "amgcolor-993u.jpg" } },
      { name:"MANUFAKTUR 오팔라이트 화이트 마그노", img:P + "amgcolor-659u.jpg", mfk:true, only:"Mercedes-AMG" }
    ]
  };
})();
