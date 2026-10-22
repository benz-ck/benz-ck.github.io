/* ─────────────────────────────────────────────────────────
   벤츠 홈페이지 자료 — 모든 페이지(첫 화면·프로모션·모델·계산기)가 이 파일 하나를 같이 씁니다.
   매달 프로모션이 바뀌면 PRICE_YEAR/PRICE_MONTH 와 PRICE_ROWS 만 고치면 됩니다.
   PRICE_LIST 블록은 _제작키트/kit/site_pricelist.py 가 가격표.json 으로 갈아 끼웁니다.
   ───────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────
   쇼룸 사진 — 사진을 바꿀 때는 images/ 폴더에 **새 이름**으로 넣고
   아래 src 를 그 이름으로 고치세요. 같은 이름으로 덮어쓰면 한 번이라도
   사이트를 열어 본 사람의 브라우저가 옛 사진을 계속 보여줍니다.
   차가 바뀌었을 때는 title / note 도 함께 고치세요.
   ───────────────────────────────────────────────────────── */
var SHOTS = [
  { src:"images/shot-s450-front.jpg",    title:"S 450 4MATIC Long AMG Line", note:"인천전시장 · 정면" },
  { src:"images/shot-s450-rear.jpg",     title:"S 450 4MATIC Long AMG Line", note:"인천전시장 · 후면" },
  { src:"images/shot-s450-interior.jpg", title:"S 450 4MATIC Long AMG Line", note:"실내 · 앰비언트 라이트" }
];
var SHOTS_NOTE = "모든 사진은 인천전시장에서 직접 촬영했습니다";

/* ─────────────────────────────────────────────────────────
   가격표 데이터 — 여기만 고치면 표가 바뀝니다.
     year  : 연식(26/27)
     msrp  : 판매가격(원) — 가격표에 없는 특별판은 null(가격 문의). from:true 면 최저가에 "부터"
     fin   : 현금 할인 + MBM 할부 특별 할인 합계(%) — 프로모션표 [1] + [2-1]
     cash  : 현금 할인(%) — 프로모션표 [1]
     ret   : 재구매 추가 할인(%) — 프로모션표 [4] Cash Retention
     trade : 트레이드인 추가 할인(%) — 프로모션표 [4-1] +Trade-in
     seg   : sedan / suv / amg / ev
   기준 월이 지나면 표 위에 안내 배너가 자동으로 뜹니다.
   ───────────────────────────────────────────────────────── */
var PRICE_YEAR = 2026, PRICE_MONTH = 10;
var PRICE_ASOF = PRICE_YEAR + "년 " + PRICE_MONTH + "월 기준";

var PRICE_ROWS = [
  { model:"A-Class", year:26, trim:"A 220 Hatch", seg:"sedan", msrp:48700000, fin:10, cash:10, ret:1, trade:1 },
  { model:"A-Class", year:26, trim:"A 220 Sedan", seg:"sedan", msrp:50500000, fin:5, cash:5, ret:1, trade:1 },
  { model:"CLA", year:26, trim:"CLA 250 4M AMG Line", seg:"sedan", msrp:64500000, fin:7, cash:7, ret:1, trade:1 },
  { model:"GLA", year:26, trim:"GLA 250 4M", seg:"suv", msrp:70000000, fin:13, cash:9, ret:1, trade:1 },
  { model:"GLB", year:26, trim:"GLB 250 4M", seg:"suv", msrp:72000000, fin:17, cash:13, ret:1, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLB 35 4M", seg:"amg", msrp:79500000, fin:13, cash:9, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG A 45 S 4M+", seg:"amg", msrp:81400000, fin:11, cash:7, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG CLA 45 S 4M+", seg:"amg", msrp:91800000, fin:5, cash:5, ret:2, trade:1 },
  { model:"GLA", year:27, trim:"GLA 250 4M", seg:"suv", msrp:70800000, fin:13, cash:9, ret:1, trade:1 },
  { model:"C-Class", year:26, trim:"C 200 AV", seg:"sedan", msrp:65100000, fin:14, cash:10, ret:1, trade:1 },
  { model:"C-Class", year:26, trim:"C 200 AMG Line", seg:"sedan", msrp:68300000, fin:14, cash:10, ret:1, trade:1 },
  { model:"C-Class", year:26, trim:"C 200 Final Edition", seg:"sedan", msrp:66300000, fin:14, cash:10, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 200 Exclusive", seg:"sedan", msrp:77500000, fin:20, cash:15, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 200 AMG Line", seg:"sedan", msrp:81000000, fin:19, cash:15, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 200 AMG Line (RoF Edition)", seg:"sedan", msrp:null, fin:19, cash:15, ret:1, trade:1, memo:"나이트 패키지 옵션 +20만원 추가 할인" },
  { model:"E-Class", year:26, trim:"E 220 d 4M", seg:"sedan", msrp:87200000, fin:12, cash:12, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 300 4M Exclusive", seg:"sedan", msrp:94800000, fin:14, cash:10, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 300 4M AMG Line", seg:"sedan", msrp:99000000, fin:14, cash:10, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 300 AMG Line (140주년)", seg:"sedan", msrp:null, fin:14, cash:10, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 350 e 4M Exclusive", seg:"sedan", msrp:100000000, fin:14, cash:14, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 450 4M AMG Line", seg:"sedan", msrp:116000000, fin:11, cash:11, ret:1, trade:1 },
  { model:"E-Class", year:26, trim:"E 450 4M Exclusive", seg:"sedan", msrp:129600000, fin:11, cash:11, ret:1, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG E 53 4M+", seg:"amg", msrp:143000000, from:true, fin:10, cash:10, ret:2, trade:1 },
  { model:"E-Class", year:27, trim:"E 300 4M Exclusive", seg:"sedan", msrp:94800000, fin:12, cash:8, ret:0, trade:0 },
  { model:"E-Class", year:27, trim:"E 300 4M AMG Line", seg:"sedan", msrp:100100000, fin:12, cash:8, ret:0, trade:0 },
  { model:"E-Class", year:27, trim:"E 450 4M Exclusive", seg:"sedan", msrp:129500000, fin:10, cash:10, ret:0, trade:0 },
  { model:"E-Class", year:27, trim:"E 450 4M AMG Line", seg:"sedan", msrp:117200000, fin:10, cash:10, ret:0, trade:0 },
  { model:"E-Class", year:27, trim:"E 450 4M AMG Line", seg:"sedan", msrp:112200000, fin:10, cash:10, ret:0, trade:0, memo:"10/6 가격표 신규 트림" },
  { model:"S-Class", year:26, trim:"S 350 d 4M", seg:"sedan", msrp:154000000, fin:10, cash:10, ret:2, trade:1 },
  { model:"S-Class", year:26, trim:"S 450 4M (SWB)", seg:"sedan", msrp:161000000, from:true, fin:11, cash:7, ret:2, trade:1, memo:"운용리스 시 할부 대신 +6%" },
  { model:"S-Class", year:26, trim:"S 450 4M Long", seg:"sedan", msrp:193000000, from:true, fin:10, cash:10, ret:2, trade:1 },
  { model:"S-Class", year:26, trim:"S 500 4M Long", seg:"sedan", msrp:215000000, from:true, fin:10, cash:10, ret:2, trade:1 },
  { model:"S-Class", year:26, trim:"S 580 4M Long", seg:"sedan", msrp:260000000, fin:10, cash:10, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG S 63 E Performance", seg:"amg", msrp:299000000, fin:10, cash:10, ret:2, trade:1 },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach S 580 4M (MANUFAKTUR 포함)", seg:"sedan", msrp:317000000, fin:9, cash:9, ret:2, trade:1, ew:"t1", memo:"운용리스 시 +2%" },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach S 680 4M", seg:"sedan", msrp:403000000, fin:9, cash:9, ret:9, trade:1, ew:"t1", conq:7, memo:"운용리스 시 +2%" },
  { model:"S-Class", year:27, trim:"S 350 d 4M", seg:"sedan", msrp:154000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"S-Class", year:27, trim:"S 450 4M", seg:"sedan", msrp:162400000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"S-Class", year:27, trim:"S 450 4M Long AMG Line", seg:"sedan", msrp:195400000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"S-Class", year:27, trim:"S 450 4M Long Exclusive", seg:"sedan", msrp:175400000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"S-Class", year:27, trim:"S 500 4M Long", seg:"sedan", msrp:220000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"S-Class", year:27, trim:"S 580 4M Long", seg:"sedan", msrp:270000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"Mercedes-Maybach", year:27, trim:"Maybach S 580", seg:"sedan", msrp:317000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"Mercedes-Maybach", year:27, trim:"Maybach S 580 MANUFAKTUR", seg:"sedan", msrp:336000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"Mercedes-Maybach", year:27, trim:"Maybach S 680", seg:"sedan", msrp:407000000, fin:0, cash:0, ret:2, trade:1, ew:"s27" },
  { model:"CLE", year:26, trim:"CLE 200 Coupé", seg:"sedan", msrp:76700000, fin:5, cash:5, ret:1, trade:1 },
  { model:"CLE", year:26, trim:"CLE 200 Coupé (140주년 Edition)", seg:"sedan", msrp:null, fin:5, cash:5, ret:1, trade:1 },
  { model:"CLE", year:26, trim:"CLE 200 Cabriolet", seg:"sedan", msrp:83100000, fin:4, cash:4, ret:1, trade:1 },
  { model:"CLE", year:26, trim:"CLE 200 Cabriolet (140주년 Edition)", seg:"sedan", msrp:null, fin:4, cash:4, ret:1, trade:1 },
  { model:"CLE", year:26, trim:"CLE 450 4M Coupé", seg:"sedan", msrp:99700000, fin:9, cash:9, ret:1, trade:1 },
  { model:"CLE", year:26, trim:"CLE 450 4M Cabriolet", seg:"sedan", msrp:104000000, fin:6, cash:6, ret:1, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG CLE 53 4M+ Coupé", seg:"amg", msrp:109100000, fin:3, cash:3, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG CLE 53 4M+ Cabriolet", seg:"amg", msrp:115000000, fin:3, cash:3, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG SL 43", seg:"amg", msrp:160000000, fin:9, cash:9, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GT 43 (C192)", seg:"amg", msrp:149500000, fin:9, cash:9, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GT 43 4M+ (X290)", seg:"amg", msrp:164000000, fin:9, cash:9, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GT 55 4M+", seg:"amg", msrp:210000000, fin:3, cash:3, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GT 63 S E Performance", seg:"amg", msrp:280000000, fin:4, cash:4, ret:2, trade:1 },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach SL 680", seg:"amg", msrp:344000000, fin:2, cash:2, ret:2, trade:1 },
  { model:"CLE", year:27, trim:"CLE 200 Coupé", seg:"sedan", msrp:77600000, fin:2, cash:2, ret:1, trade:1 },
  { model:"CLE", year:27, trim:"CLE 450 Coupé", seg:"sedan", msrp:100800000, fin:2, cash:2, ret:1, trade:1 },
  { model:"CLE", year:27, trim:"CLE 200 Cabriolet", seg:"sedan", msrp:84100000, fin:2, cash:2, ret:1, trade:1 },
  { model:"CLE", year:27, trim:"CLE 450 4M Cabriolet", seg:"sedan", msrp:105200000, fin:2, cash:2, ret:1, trade:1 },
  { model:"Mercedes-AMG", year:27, trim:"AMG CLE 53 4M+ Cabriolet", seg:"amg", msrp:116600000, fin:2, cash:2, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:27, trim:"AMG CLE 53 4M+ Coupé", seg:"amg", msrp:110600000, fin:2, cash:2, ret:0, trade:0 },
  { model:"Mercedes-AMG", year:27, trim:"AMG GT 43", seg:"amg", msrp:149500000, fin:8, cash:8, ret:0, trade:0 },
  { model:"Mercedes-AMG", year:27, trim:"AMG GT 55 4M+", seg:"amg", msrp:212600000, fin:2, cash:2, ret:0, trade:0 },
  { model:"Mercedes-AMG", year:27, trim:"AMG SL 43", seg:"amg", msrp:161800000, fin:8, cash:8, ret:0, trade:0 },
  { model:"GLC", year:26, trim:"GLC 220 d 4M", seg:"suv", msrp:82200000, fin:10, cash:10, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M AV", seg:"suv", msrp:82500000, fin:11, cash:7, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M AMG Line", seg:"suv", msrp:92500000, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M AMG Line (RoF Edition)", seg:"suv", msrp:null, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M AMG Line (140주년)", seg:"suv", msrp:null, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M Coupé AV", seg:"suv", msrp:86600000, fin:11, cash:7, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M Coupé AMG Line", seg:"suv", msrp:96900000, fin:13, cash:9, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M Coupé AMG Line (RoF Edition)", seg:"suv", msrp:null, fin:13, cash:9, ret:1, trade:1, conq:1 },
  { model:"GLC", year:26, trim:"GLC 300 4M Coupé AMG Line (140주년)", seg:"suv", msrp:null, fin:13, cash:9, ret:1, trade:1, conq:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLC 43 4M", seg:"amg", msrp:103600000, fin:7, cash:7, ret:2, trade:1, conq:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLC 43 4M Coupé", seg:"amg", msrp:108300000, fin:3, cash:3, ret:2, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 350 4M", seg:"suv", msrp:118000000, fin:10, cash:10, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 300 d 4M", seg:"suv", msrp:119200000, fin:8, cash:8, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 450 4M", seg:"suv", msrp:129000000, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 450 4M AMG Line", seg:"suv", msrp:139000000, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 450 d 4M Coupé", seg:"suv", msrp:134000000, fin:12, cash:12, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 450 4M Coupé", seg:"suv", msrp:142500000, fin:19, cash:15, ret:1, trade:1, conq:1 },
  { model:"GLE", year:26, trim:"GLE 450 4M AMG Line Coupé", seg:"suv", msrp:142500000, fin:16, cash:12, ret:1, trade:1, conq:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLE 53 4M+", seg:"amg", msrp:166000000, fin:8, cash:8, ret:2, trade:1, conq:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLE 53 4M+ Coupé", seg:"amg", msrp:170000000, fin:5, cash:5, ret:2, trade:1, conq:1 },
  { model:"GLS", year:26, trim:"GLS 450 4M AMG Line", seg:"suv", msrp:154000000, fin:8, cash:8, ret:2, trade:1 },
  { model:"GLS", year:26, trim:"GLS 450 d 4M", seg:"suv", msrp:154000000, fin:2, cash:2, ret:2, trade:1 },
  { model:"GLS", year:26, trim:"GLS 580 4M", seg:"suv", msrp:193400000, fin:9, cash:9, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG GLS 63 4M+", seg:"amg", msrp:210000000, fin:1, cash:1, ret:2, trade:1 },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach GLS 600", seg:"suv", msrp:295000000, fin:5, cash:5, ret:9, trade:1, conq:7 },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach GLS 600 MANUFAKTUR", seg:"suv", msrp:337000000, fin:5, cash:5, ret:9, trade:1, conq:7 },
  { model:"G-Class", year:26, trim:"G 450 d", seg:"suv", msrp:194900000, fin:0, cash:0, ret:2, trade:1 },
  { model:"G-Class", year:26, trim:"G 450 d MANUFAKTUR", seg:"suv", msrp:219100000, fin:0, cash:0, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG G 63", seg:"amg", msrp:262600000, fin:0, cash:0, ret:2, trade:1 },
  { model:"Mercedes-AMG", year:26, trim:"AMG G 63 MANUFAKTUR", seg:"amg", msrp:289800000, fin:0, cash:0, ret:2, trade:1 },
  { model:"GLC", year:27, trim:"GLC 300 4M AV", seg:"suv", msrp:82500000, fin:7, cash:7, ret:1, trade:1, conq:1 },
  { model:"GLC", year:27, trim:"GLC 300 4M AMG Line", seg:"suv", msrp:95500000, fin:7, cash:7, ret:1, trade:1, conq:1 },
  { model:"GLC", year:27, trim:"GLC 300 4M Coupé AV", seg:"suv", msrp:86600000, fin:5, cash:5, ret:1, trade:1, conq:1 },
  { model:"GLC", year:27, trim:"GLC 300 4M Coupé AMG Line", seg:"suv", msrp:96900000, fin:5, cash:5, ret:1, trade:1, conq:1 },
  { model:"EQA", year:26, trim:"EQA 250 Progressive", seg:"ev", msrp:70000000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQA", year:26, trim:"EQA 250 AMG Line", seg:"ev", msrp:75800000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQB", year:26, trim:"EQB 300 4M Progressive", seg:"ev", msrp:78800000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQB", year:26, trim:"EQB 300 4M AMG Line", seg:"ev", msrp:84300000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQE", year:26, trim:"EQE 350+ SUV", seg:"ev", msrp:106000000, fin:10, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQE", year:26, trim:"EQE 350+", seg:"ev", msrp:110000000, fin:10, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQE", year:26, trim:"EQE 500 4M SUV", seg:"ev", msrp:141000000, fin:10, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQS", year:26, trim:"EQS 450 4M SUV", seg:"ev", msrp:166000000, fin:10, cash:10, ret:2, trade:1, ew:"t1" },
  { model:"EQS", year:26, trim:"EQS 580 4M SUV", seg:"ev", msrp:192000000, fin:10, cash:10, ret:2, trade:1, ew:"t1" },
  { model:"G-Class", year:26, trim:"G 580 with EQ Technology", seg:"ev", msrp:216100000, fin:0, cash:0, ret:2, trade:1, ew:"t1" },
  { model:"G-Class", year:26, trim:"G 580 with EQ Technology MANUFAKTUR", seg:"ev", msrp:null, fin:0, cash:0, ret:2, trade:1, ew:"t1" },
  { model:"Mercedes-Maybach", year:26, trim:"Maybach EQS 680 SUV", seg:"ev", msrp:235000000, fin:0, cash:0, ret:2, trade:1, ew:"t1" },
  { model:"EQA", year:27, trim:"EQA 250 Progressive", seg:"ev", msrp:70800000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"EQA", year:27, trim:"EQA 250 AMG Line", seg:"ev", msrp:76700000, fin:14, cash:10, ret:1, trade:1, ew:"t1" },
  { model:"Mercedes-AMG", year:27, trim:"AMG A 45 S 4M+", seg:"amg", msrp:82300000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 220", seg:"sedan", msrp:59900000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 220 AMG Line", seg:"sedan", msrp:62900000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 200 electric Essential", seg:"ev", msrp:52900000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 200 electric Advanced", seg:"ev", msrp:55800000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 200 electric AMG Line", seg:"ev", msrp:58900000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 250+ electric", seg:"ev", msrp:63700000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"CLA", year:27, trim:"CLA 250+ electric AMG Line", seg:"ev", msrp:67700000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"E-Class", year:27, trim:"E 220 d 4M AV", seg:"sedan", msrp:87500000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"E-Class", year:27, trim:"E 350 e 4M Exclusive", seg:"sedan", msrp:101100000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG E 53 HYBRID 4M+", seg:"amg", msrp:149900000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"GLC", year:27, trim:"GLC 220 d 4M", seg:"suv", msrp:82200000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"GLC", year:27, trim:"GLC 300 4M", seg:"suv", msrp:77000000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"GLC", year:27, trim:"GLC 300 4M Coupé", seg:"suv", msrp:80000000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG GLC 53 4M+", seg:"amg", msrp:105100000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG GLC 53 4M+ Coupé", seg:"amg", msrp:109800000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"GLC", year:27, trim:"GLC 300 4M electric AMG Line (Launch Edition)", seg:"ev", msrp:90000000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"GLC", year:27, trim:"GLC 300 4M electric AMG Line+ (Launch Edition)", seg:"ev", msrp:94800000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG SL 63 4M+", seg:"amg", msrp:252800000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-Maybach", year:27, trim:"Maybach SL 680", seg:"amg", msrp:348000000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG GT 63 S E Performance", seg:"amg", msrp:283100000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"G-Class", year:27, trim:"G 450 d", seg:"suv", msrp:199700000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"G-Class", year:27, trim:"G 450 d MANUFAKTUR", seg:"suv", msrp:228200000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG G 63", seg:"amg", msrp:275000000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"Mercedes-AMG", year:27, trim:"AMG G 63 MANUFAKTUR", seg:"amg", msrp:301000000, fin:0, cash:0, ret:0, trade:0, memo:"10월 프로모션 대상 아님" },
  { model:"G-Class", year:27, trim:"G 580 with EQ Technology", seg:"ev", msrp:219000000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"G-Class", year:27, trim:"G 580 with EQ Technology MANUFAKTUR", seg:"ev", msrp:238500000, fin:0, cash:0, ret:0, trade:0, ew:"t1", memo:"10월 프로모션 대상 아님" },
  { model:"V-Class", year:27, trim:"V 300 d 4M Exclusive", seg:"suv", msrp:124000000, fin:0, cash:0, ret:0, trade:0, memo:"10/20 가격표 신규 차종 · 10월 프로모션 대상 아님" }
];

/* 첫 화면 TOP 5 손보기 — DEALS_SKIP 은 자동 순위에서 뺄 트림, DEALS_PIN 은 순위와 상관없이 넣을 트림(연식|트림) */
var DEALS_SKIP = ["26|GLB 250 4M"];
var DEALS_PIN  = ["26|GLE 450 4M AMG Line"];

/* 보증연장(EW) 추가 혜택 — 프로모션 공문 [1-2] */
var EW_LABEL = {
  t1:  "+ 보증연장 2년/7만km",
  s27: "+ 보증연장 최대 2년 *"
};

/* 차종별 묶음 보기 — 같은 PRICE_ROWS 를 차종(model)으로 묶어 카드로. 카드 제목엔 그 차종의 최고 조건만 */
/* 묶음 = 차종 계열. AMG 는 원래 차종으로(AMG E 53 → E-Class), GT·SL 만 따로 */
var FAM_ORDER = ["A-Class","CLA","C-Class","E-Class","S-Class","Maybach","CLE","AMG GT · SL","GLA","GLB","GLC","GLE","GLS","G-Class","V-Class","EQA","EQB","EQE","EQS"];
function famOf(r){
  var t = r.trim;
  if (r.model === "Mercedes-Maybach") return "Maybach";
  if (/^G 580/.test(t)) return "G-Class";
  if (/^EQ[ABES]/.test(t)) return t.slice(0, 3);
  if (r.model !== "Mercedes-AMG") return r.model;
  var m = t.replace(/^AMG /, "");
  if (/^(GT|SL)/.test(m)) return "AMG GT · SL";
  if (/^A /.test(m)) return "A-Class";
  if (/^CLA/.test(m)) return "CLA";
  if (/^CLE/.test(m)) return "CLE";
  if (/^GLB/.test(m)) return "GLB";
  if (/^GLC/.test(m)) return "GLC";
  if (/^GLE/.test(m)) return "GLE";
  if (/^GLS/.test(m)) return "GLS";
  if (/^G /.test(m)) return "G-Class";
  if (/^E /.test(m)) return "E-Class";
  if (/^S /.test(m)) return "S-Class";
  return "AMG GT · SL";
}

/* 라인업 카드 — data-seg: sedan / suv / amg / top / ev (라인업 분류 칩) */
var MODEL_CARDS = [
  { key:"A-Class", seg:"sedan", label:"COMPACT", desc:"벤츠의 시작. 해치백과 세단 두 가지에 421마력 AMG A 45 S까지 있습니다." },
  { key:"CLA", seg:"sedan", label:"COMPACT SEDAN", desc:"27년식 완전 신형. 가솔린 CLA 220과 800V 전기 CLA 두 가지로 나옵니다." },
  { key:"C-Class", seg:"sedan", label:"SEDAN", desc:"E클래스보다 한 급 작은 세단. C 200 한 가지 엔진에 라인 세 가지입니다." },
  { key:"E-Class", seg:"sedan", label:"SEDAN", desc:"비즈니스 세단의 기준. 가장 문의가 많고 재고 회전도 가장 빠릅니다." },
  { key:"S-Class", seg:"sedan", label:"SEDAN", desc:"최상위 럭셔리 세단. 금융 프로그램에 따라 조건 차이가 가장 크게 벌어집니다." },
  { key:"CLE", seg:"sedan", label:"COUPÉ · CABRIOLET", desc:"2도어 쿠페와 오픈톱 카브리올레. 381마력 CLE 450과 AMG CLE 53까지 있습니다." },
  { key:"GLA", seg:"suv", label:"COMPACT SUV", desc:"가장 작은 벤츠 SUV. 도심 주차가 편하고 사륜구동이 기본입니다." },
  { key:"GLB", seg:"suv", label:"COMPACT SUV", desc:"실내가 넉넉한 박스형 SUV. GLB 250은 3열 시트를 선택사양으로 더할 수 있습니다." },
  { key:"GLC", seg:"suv", label:"SUV", desc:"도심과 일상을 위한 프리미엄 SUV. 첫 벤츠로 가장 많이 선택됩니다." },
  { key:"GLE", seg:"suv", label:"SUV", desc:"여유로운 공간과 존재감. 패밀리 SUV로 넘어오시는 분들이 많습니다." },
  { key:"GLS", seg:"suv", label:"SUV", desc:"럭셔리 대형 SUV. 7인승 구성과 옵션 조합을 함께 정리해 드립니다." },
  { key:"G-Class", seg:"top", label:"ICON", desc:"아이코닉 오프로더. 가격만큼 대기 기간과 재고 흐름이 중요한 모델입니다." },
  { key:"V-Class", seg:"suv", label:"MPV", desc:"27년식 새로 들어온 프리미엄 MPV. 마사지 되는 뒷좌석 럭셔리 시트에 좌우 전동 슬라이딩 도어." },
  { key:"Mercedes-AMG", seg:"amg", label:"PERFORMANCE", desc:"고성능 퍼포먼스 라인업. 일상 주행과의 균형점을 기준으로 안내합니다." },
  { key:"Mercedes-Maybach", seg:"top", label:"LUXURY", desc:"궁극의 럭셔리. 뒷좌석 기준으로 S클래스와 갈리는 지점을 짚어 드립니다." },
  { key:"Electric", seg:"ev", label:"ELECTRIC", desc:"차세대 전동화 라인업. 지자체 보조금과 충전 환경까지 포함해 계산합니다." }
];

/* ─────────────────────────────────────────────────────
   모델 상세 — 제원은 벤츠코리아 공식 카탈로그 기준입니다.
   열: [트림, 가격, 최고출력, 0→100km/h, 복합연비]
   가격은 2026-10-20 자 공식 가격표의 권장 소비자가(부가세 포함·개별소비세 5%).
   27년식이 있으면 27년식, 없으면 26년식. 한 트림에 라인이 여럿이면 최저가에 '부터'.
   ───────────────────────────────────────────────────── */
/*PRICE_LIST_START*/
  var PRICE_LIST_DATE = "2026-10-20";
  var PRICE_LIST = {"A-Class":[[27,"AMG A 45 S 4MATIC+",82300000,82300000],[26,"A 220",48700000,48700000],[26,"A 220 Sedan",50500000,50500000],[26,"AMG A 35 4MATIC",68600000,68600000],[26,"AMG A 45 S 4MATIC+",81400000,81400000]],"Mercedes-AMG":[[27,"AMG A 45 S 4MATIC+",82300000,82300000],[27,"AMG GLC 53 4MATIC+",105100000,105100000],[27,"AMG GLC 53 4MATIC+ Coupé",109800000,109800000],[27,"AMG CLE 53 4MATIC+ Coupé",110600000,110600000],[27,"AMG CLE 53 4MATIC+ Cabriolet",116600000,116600000],[27,"AMG GT 43",149500000,149500000],[27,"AMG E 53 HYBRID 4MATIC+",149900000,149900000],[27,"AMG SL 43",161800000,161800000],[27,"AMG GT 55 4MATIC+",212600000,212600000],[27,"AMG SL 63 4MATIC+",252800000,252800000],[27,"AMG G 63",275000000,275000000],[27,"AMG GT 63 S E Performance",283100000,283100000],[27,"AMG G 63 MANUFAKTUR",301000000,301000000],[26,"AMG A 35 4MATIC",68600000,68600000],[26,"AMG GLB 35 4MATIC",79500000,79500000],[26,"AMG A 45 S 4MATIC+",81400000,81400000],[26,"AMG CLA 45 S 4MATIC+",91800000,91800000],[26,"AMG CLA 45 S 4MATIC+ Final Edition",97000000,97000000],[26,"AMG GLC 43 4MATIC",103600000,103600000],[26,"AMG GLC 43 4MATIC Coupé",108300000,108300000],[26,"AMG CLE 53 4MATIC+ Coupe",109100000,109100000],[26,"AMG CLE 53 4MATIC+ Cabriolet",115000000,115000000],[26,"AMG CLE 53 4MATIC+ Coupe Limited Edition",132700000,132700000],[26,"AMG CLE 53 4MATIC+ Cabriolet Limited Edition",138700000,138700000],[26,"AMG E 53 HYBRID 4MATIC+",143000000,148400000],[26,"AMG GT 43",149500000,149500000],[26,"AMG SL 43",160000000,160000000],[26,"AMG GT 43 4MATIC+",164000000,164000000],[26,"AMG GLE 53 4MATIC+",166000000,166000000],[26,"AMG GLE 53 4MATIC+ Coupé",170000000,170000000],[26,"AMG GT 55 4MATIC+",210000000,210000000],[26,"AMG GLS 63 4MATIC+",210000000,210000000],[26,"AMG SL 63 4MATIC+",250000000,250000000],[26,"AMG G 63",262600000,262600000],[26,"AMG GT 63 S E Performance",280000000,280000000],[26,"AMG G 63 MANUFAKTUR",289800000,289800000],[26,"AMG S 63 E Performance",299000000,299000000]],"CLA":[[27,"CLA 200 electric Essential",52900000,52900000],[27,"CLA 200 electric Advanced",55800000,55800000],[27,"CLA 200 electric AMG Line",58900000,58900000],[27,"CLA 220",59900000,59900000],[27,"CLA 220 AMG Line",62900000,62900000],[27,"CLA 250+ electric",63700000,63700000],[27,"CLA 250+ electric AMG Line",67700000,67700000],[26,"CLA 250 4MATIC AMG Line",64500000,64500000],[26,"AMG CLA 45 S 4MATIC+",91800000,91800000],[26,"AMG CLA 45 S 4MATIC+ Final Edition",97000000,97000000]],"Electric":[[27,"CLA 200 electric Essential",52900000,52900000],[27,"CLA 200 electric Advanced",55800000,55800000],[27,"CLA 200 electric AMG Line",58900000,58900000],[27,"CLA 250+ electric",63700000,63700000],[27,"CLA 250+ electric AMG Line",67700000,67700000],[27,"EQA 250 Progressive",70800000,70800000],[27,"EQA 250 AMG Line",76700000,76700000],[27,"GLC 300 4MATIC electric AMG Line (Launch Edition)",90000000,90000000],[27,"GLC 300 4MATIC electric AMG Line+ (Launch Edition)",94800000,94800000],[27,"G 580 with EQ Technology",219000000,219000000],[27,"G 580 with EQ Technology MANUFAKTUR",238500000,238500000],[26,"EQA 250 Progressive",70000000,70000000],[26,"EQA 250 AMG Line",75800000,75800000],[26,"EQB 300 4MATIC Progressive",78800000,78800000],[26,"EQB 300 4MATIC AMG Line",84300000,84300000],[26,"EQE 350+ SUV",106000000,106000000],[26,"EQE 350+",110000000,110000000],[26,"EQE 500 4MATIC SUV",141000000,141000000],[26,"EQS 450 4MATIC SUV",166000000,166000000],[26,"EQS 580 4MATIC SUV",192000000,192000000],[26,"G 580 with EQ Technology",216100000,216100000],[26,"Maybach EQS 680 SUV",235000000,235000000]],"GLA":[[27,"GLA 250 4MATIC AMG Line",70800000,70800000],[26,"GLA 250 4MATIC AMG Line",70000000,70000000]],"CLE":[[27,"CLE 200 Coupé",77600000,77600000],[27,"CLE 200 Cabriolet",84100000,84100000],[27,"CLE 450 4MATIC Coupé",100800000,100800000],[27,"CLE 450 4MATIC Cabriolet",105200000,105200000],[27,"AMG CLE 53 4MATIC+ Coupé",110600000,110600000],[27,"AMG CLE 53 4MATIC+ Cabriolet",116600000,116600000],[26,"CLE 200 Coupe AMG Line",76700000,76700000],[26,"CLE 200 Cabriolet AMG Line",83100000,83100000],[26,"CLE 450 4MATIC Coupe AMG Line",99700000,99700000],[26,"CLE 450 4MATIC Cabriolet AMG Line",104000000,104000000],[26,"AMG CLE 53 4MATIC+ Coupe",109100000,109100000],[26,"AMG CLE 53 4MATIC+ Cabriolet",115000000,115000000],[26,"AMG CLE 53 4MATIC+ Coupe Limited Edition",132700000,132700000],[26,"AMG CLE 53 4MATIC+ Cabriolet Limited Edition",138700000,138700000]],"E-Class":[[27,"E 220 d 4MATIC Avantgarde",87500000,87500000],[27,"E 300 4MATIC Exclusive",94800000,94800000],[27,"E 300 4MATIC AMG Line",100100000,100100000],[27,"E 350 e 4MATIC Exclusive",101100000,101100000],[27,"E 450 4MATIC AMG Line",112200000,117200000],[27,"E 450 4MATIC Exclusive",129500000,129500000],[27,"AMG E 53 HYBRID 4MATIC+",149900000,149900000],[26,"E 200 Avantgarde",77500000,77500000],[26,"E 200 Exclusive",77500000,77500000],[26,"E 200 AMG Line",81000000,81000000],[26,"E 220 d 4MATIC Exclusive",87200000,87200000],[26,"E 300 4MATIC Exclusive",94800000,94800000],[26,"E 300 4MATIC AMG Line",99000000,99000000],[26,"E 350 e 4MATIC Exclusive",100000000,100000000],[26,"E 450 4MATIC AMG Line",116000000,116000000],[26,"E 450 4MATIC Exclusive",129600000,129600000],[26,"AMG E 53 HYBRID 4MATIC+",143000000,148400000]],"GLC":[[27,"GLC 300 4MATIC",77000000,77000000],[27,"GLC 300 4MATIC Coupé",80000000,80000000],[27,"GLC 220 d 4MATIC",82200000,82200000],[27,"GLC 300 4MATIC Avantgarde",82500000,82500000],[27,"GLC 300 4MATIC Coupé Avantgarde",86600000,86600000],[27,"GLC 300 4MATIC electric AMG Line (Launch Edition)",90000000,90000000],[27,"GLC 300 4MATIC electric AMG Line+ (Launch Edition)",94800000,94800000],[27,"GLC 300 4MATIC AMG Line",95500000,95500000],[27,"GLC 300 4MATIC Coupé AMG Line",96900000,97900000],[27,"AMG GLC 53 4MATIC+",105100000,105100000],[27,"AMG GLC 53 4MATIC+ Coupé",109800000,109800000],[26,"GLC 220 d 4MATIC",82200000,82200000],[26,"GLC 300 4MATIC Avantgarde",82500000,82500000],[26,"GLC 300 4MATIC Coupé Avantgarde",86600000,86600000],[26,"GLC 300 4MATIC AMG Line",92500000,92500000],[26,"GLC 300 4MATIC Coupé AMG Line",96900000,96900000],[26,"AMG GLC 43 4MATIC",103600000,103600000],[26,"AMG GLC 43 4MATIC Coupé",108300000,108300000]],"S-Class":[[27,"S 350 d 4MATIC",154000000,154000000],[27,"S 450 4MATIC",162400000,162400000],[27,"S 450 4MATIC Long Exclusive",175400000,175400000],[27,"S 450 4MATIC Long AMG Line",195400000,195400000],[27,"S 500 4MATIC Long",220000000,220000000],[27,"S 580 4MATIC Long",270000000,270000000],[26,"S 350 d 4MATIC",154000000,155000000],[26,"S 450 4MATIC",161000000,195000000],[26,"S 500 4MATIC",215000000,217000000],[26,"S 580 4MATIC",260000000,260000000],[26,"AMG S 63 E Performance",299000000,299000000]],"Mercedes-Maybach":[[27,"Maybach S 580",317000000,317000000],[27,"Maybach S 580 MANUFAKTUR",336000000,336000000],[27,"Maybach SL 680",348000000,348000000],[27,"Maybach S 680",407000000,407000000],[26,"Maybach EQS 680 SUV",235000000,235000000],[26,"Maybach GLS 600",295000000,295000000],[26,"Maybach S 580",317000000,317000000],[26,"Maybach GLS 600 MANUFAKTUR",337000000,337000000],[26,"Maybach SL 680",344000000,344000000],[26,"Maybach S 680",403000000,403000000],[26,"Maybach S 680 \"V12 Edition\"",479400000,479400000]],"G-Class":[[27,"G 450 d",199700000,199700000],[27,"G 580 with EQ Technology",219000000,219000000],[27,"G 450 d MANUFAKTUR",228200000,228200000],[27,"G 580 with EQ Technology MANUFAKTUR",238500000,238500000],[27,"AMG G 63",275000000,275000000],[27,"AMG G 63 MANUFAKTUR",301000000,301000000],[26,"G 450 d",194900000,194900000],[26,"G 580 with EQ Technology",216100000,216100000],[26,"G 450 d MANUFAKTUR",219100000,219100000],[26,"AMG G 63",262600000,262600000],[26,"AMG G 63 MANUFAKTUR",289800000,289800000]],"V-Class":[[27,"V 300 d 4MATIC Exclusive",124000000,124000000]],"GLB":[[26,"GLB 200 d",64300000,64300000],[26,"GLB 250 4MATIC",72000000,72000000],[26,"AMG GLB 35 4MATIC",79500000,79500000]],"C-Class":[[26,"C 200 Avantgarde",65100000,65100000],[26,"C 200 Special Edition",66300000,66300000],[26,"C 200 AMG Line",68300000,68300000]],"GLE":[[26,"GLE 350 4MATIC",118000000,118000000],[26,"GLE 300 d 4MATIC",119200000,119200000],[26,"GLE 450 4MATIC",129000000,129000000],[26,"GLE 450 d 4MATIC Coupé AMG Line",134000000,134000000],[26,"GLE 450 4MATIC AMG Line",139000000,139000000],[26,"GLE 450 4MATIC Coupé AMG Line",142500000,142500000],[26,"AMG GLE 53 4MATIC+",166000000,166000000],[26,"AMG GLE 53 4MATIC+ Coupé",170000000,170000000]],"GLS":[[26,"GLS 450 d 4MATIC AMG Line",154000000,154000000],[26,"GLS 450 4MATIC AMG Line",154000000,154000000],[26,"GLS 450 d 4MATIC AMG Line Premium",158500000,158500000],[26,"GLS 450 4MATIC AMG Line Premium",158500000,158500000],[26,"GLS 580 4MATIC AMG Line",193400000,193400000],[26,"AMG GLS 63 4MATIC+",210000000,210000000]]};
  /*PRICE_LIST_END*/
var MODEL_INFO = {
  "A-Class": {
    tag: "벤츠에서 가장 작은 차입니다. 해치백과 세단 두 가지 차체에 고성능 AMG까지 고르실 수 있습니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["A 220 해치백", "4,870만원", "190마력", "6.9초", "12.2km/ℓ · 3등급"],
      ["A 220 세단", "5,050만원", "190마력", "7.0초", "12.5km/ℓ · 3등급"],
      ["AMG A 45 S 4MATIC+", "8,230만원", "421마력", "3.9초", "9.1km/ℓ · 5등급"]
    ],
    dim: ["해치백 4,430 × 1,795 × 1,445mm · 트렁크 350~1,190ℓ", "세단 4,560 × 1,795 × 1,445mm · 트렁크 355~1,195ℓ"],
    note: "<b>벤츠를 가장 부담 없이 시작하실 수 있는 모델</b>입니다. 해치백과 세단은 엔진(190마력)이 같고, 세단이 130mm 더 길어 뒤에 트렁크가 따로 나옵니다. 트렁크 용량은 350ℓ와 355ℓ로 거의 같고 가격 차이는 180만원입니다. 운전 재미를 원하시면 421마력에 0→100km/h 3.9초인 AMG A 45 S가 있습니다."
  },
  "CLA": {
    tag: "27년식으로 완전히 새로 나온 CLA입니다. 가솔린과 전기 두 가지가 있고, 전기 CLA는 800V 급속 충전을 지원합니다.",
    cols: ["트림", "가격", "파워트레인", "연비 · 배터리"],
    rows: [
      ["CLA 220 (신형)", "5,990만원부터", "1.5 가솔린 · 전륜", "16.2km/ℓ · 1등급"],
      ["CLA 200 electric", "5,290만원부터", "전기 · 800V", "배터리 58kWh"],
      ["CLA 250+ electric", "6,370만원부터", "전기 · 800V", "배터리 85kWh"],
      ["CLA 250 4MATIC (26년식)", "6,450만원", "2.0 가솔린 · 224마력", "12.0km/ℓ · 3등급"],
      ["AMG CLA 45 S 4MATIC+", "9,180만원부터", "AMG · 사륜", "—"]
    ],
    dim: ["신형 CLA 220 4,720 × 1,835 × 1,470mm", "이전 세대 CLA 250 4,688 × 1,830 × 1,427mm · 트렁크 460ℓ", "전기 CLA는 앞쪽에도 트렁크"],
    note: "CLA는 <b>27년식부터 완전 신형</b>입니다. 가솔린 CLA 220은 복합연비 16.2km/ℓ(1등급)로 연비가 좋고, 전기 CLA는 5,290만원부터 시작해 <b>전기차 보조금 대상이면 실구매가가 더 내려갑니다.</b> 전기 CLA 250+는 배터리가 85kWh로 크고 급속 충전으로 10%→80%를 약 22분에 채웁니다. 거주지와 충전 환경을 알려주시면 가솔린과 전기의 실구매가를 나란히 계산해 드립니다."
  },
  "C-Class": {
    tag: "E클래스보다 한 급 작은 세단입니다. 26년식 C 200 한 가지 엔진에 라인 세 가지가 있습니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["C 200 아방가르드", "6,510만원", "204마력", "7.3초", "12.0km/ℓ · 3등급"],
      ["C 200 스페셜 에디션", "6,630만원", "204마력", "7.3초", "12.0km/ℓ · 3등급"],
      ["C 200 AMG 라인", "6,830만원", "204마력", "7.3초", "12.0km/ℓ · 3등급"]
    ],
    dim: ["4,755 × 1,820 × 1,440mm", "E클래스보다 길이 200mm 짧음"],
    note: "벤츠 세단을 원하시는데 E클래스가 부담되실 때 먼저 보시는 모델입니다. 세 트림 모두 <b>엔진(204마력)과 연비는 같고 외관 라인과 휠, 실내 마감에서 갈립니다.</b> 아방가르드와 AMG 라인의 가격 차이는 320만원입니다. 실물 차이는 사진과 전시장 차량으로 비교해 보여 드리겠습니다."
  },
  "E-Class": {
    tag: "비즈니스 세단의 기준입니다. 가솔린·디젤·플러그인 하이브리드가 모두 있어 주행 패턴에 맞춰 고르실 수 있습니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["E 200", "7,750만원부터", "204마력", "7.5초", "12.3km/ℓ · 3등급"],
      ["E 220 d 4MATIC", "8,750만원", "197마력", "7.8초", "16.0km/ℓ · 1등급"],
      ["E 300 4MATIC", "9,480만원부터", "258마력", "6.1초", "11.1km/ℓ · 4등급"],
      ["E 450 4MATIC", "1억 1,220만원부터", "381마력", "4.5초", "10.5km/ℓ · 4등급"],
      ["E 350 e 4MATIC", "1억 110만원", "204마력 + 95kW", "6.5초", "전기 77km 주행"]
    ],
    dim: ["4,955 × 1,880 × 1,475mm", "휠베이스 2,960mm", "트렁크 540ℓ"],
    note: "가장 문의가 많은 모델이라 <b>재고 회전이 빠릅니다.</b> 원하시는 색상·옵션이 정해져 있으면 미리 말씀해 주시는 편이 낫습니다. 장거리가 많으시면 <b>E 220 d(16km/ℓ, 1등급)</b>, 도심 위주면 E 200이나 E 300을 권해 드립니다. E 350 e는 전기만으로 77km를 달려서 출퇴근 거리가 짧으면 기름을 거의 안 씁니다."
  },
  "S-Class": {
    tag: "최상위 럭셔리 세단입니다. 27년식 페이스리프트 기준으로 숏 두 가지, 롱 네 가지가 있고 뒷좌석을 주로 쓰실지에 따라 선택이 갈립니다.",
    cols: ["트림", "가격", "엔진", "최고출력", "리어 액슬 스티어링"],
    rows: [
      ["S 350 d 4MATIC (숏)", "1억 5,400만원", "6기통 디젤", "313마력", "4.5°"],
      ["S 450 4MATIC (숏)", "1억 6,240만원", "6기통 가솔린", "381마력", "4.5°"],
      ["S 450 4MATIC 롱 익스클루시브", "1억 7,540만원", "6기통 가솔린", "381마력", "4.5°"],
      ["S 450 4MATIC 롱 AMG 라인", "1억 9,540만원", "6기통 가솔린", "381마력", "4.5°"],
      ["S 500 4MATIC 롱", "2억 2,000만원", "6기통 가솔린", "449마력", "10°"],
      ["S 580 4MATIC 롱", "2억 7,000만원", "8기통 가솔린", "503마력", "10°"]
    ],
    dim: ["숏 5,180mm · 휠베이스 3,106mm", "롱 5,290mm · 휠베이스 3,216mm", "너비 1,920 · 높이 1,505mm"],
    note: "27년식은 <b>페이스리프트가 적용돼 전 모델에 강화 에어매틱과 디지털 라이트, 파노라믹 선루프, 버메스터 3D 사운드가 기본</b>입니다. 뒷좌석에 자주 타신다면 휠베이스가 110mm 긴 롱을 보셔야 합니다 — 숏과 롱은 뒷무릎 공간이 확실히 다릅니다. 롱의 S 450은 <b>익스클루시브와 AMG 라인 두 가지</b>로 나뉘고, 외관 패키지·휠·가죽에서 갈립니다. S 500 롱부터는 리어 액슬 스티어링이 10°로 커져 좁은 길과 주차가 한결 수월하고, S 580 롱에는 E-액티브 바디 컨트롤이 들어갑니다. <b>금융 프로그램에 따라 조건 차이가 가장 크게 벌어지는 모델</b>이라 현금·할부·리스를 같이 비교해 드립니다."
  },
  "CLE": {
    tag: "2도어 쿠페와 오픈톱 카브리올레입니다. 27년식은 360° 카메라가 포함된 주차 패키지가 전 트림 기본입니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["CLE 200 쿠페", "7,760만원", "204마력", "7.4초", "11.7km/ℓ · 3등급"],
      ["CLE 450 4M 쿠페", "1억 80만원", "381마력", "4.4초", "10.9km/ℓ · 4등급"],
      ["CLE 200 카브리올레", "8,410만원", "204마력", "7.4초", "11.7km/ℓ · 3등급"],
      ["CLE 450 4M 카브리올레", "1억 520만원", "381마력", "4.4초", "10.9km/ℓ · 4등급"],
      ["AMG CLE 53 4MATIC+", "1억 1,060만원부터", "—", "—", "9.6km/ℓ · 4등급"]
    ],
    dim: ["쿠페 4,850 × 1,860 × 1,420mm · 트렁크 420ℓ", "카브리올레 높이 1,430mm · 트렁크 295~385ℓ", "AMG CLE 53 쿠페 4,855 × 1,935 × 1,435mm"],
    note: "쿠페와 카브리올레는 길이·너비가 같고 <b>지붕만 다릅니다.</b> 카브리올레는 지붕을 접어 넣는 자리 때문에 트렁크가 295~385ℓ로 쿠페(420ℓ)보다 작습니다. CLE 450은 381마력에 0→100km/h 4.4초라 AMG가 아니어도 충분히 빠르고, 연비도 10.9km/ℓ입니다. 27년식은 360° 카메라 주차 패키지가 전 트림 기본이라 문이 긴 2도어로 주차할 때 한결 편합니다."
  },
  "GLA": {
    tag: "가장 작은 벤츠 SUV입니다. 27년식은 GLA 250 4MATIC AMG 라인 한 가지로 나옵니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["GLA 250 4MATIC AMG 라인", "7,080만원", "224마력", "6.8초", "10.9km/ℓ · 4등급"]
    ],
    dim: ["4,412 × 1,834 × 1,616mm", "트렁크 435~1,430ℓ"],
    note: "<b>도심 주차가 편한 크기에 사륜구동(4MATIC)이 기본</b>입니다. GLC보다 길이가 300mm 남짓 짧아 좁은 골목과 지하 주차장에서 부담이 적고, 뒷좌석을 접으면 트렁크가 1,430ℓ까지 늘어납니다. 26년식(7,000만원)과 27년식(7,080만원)이 함께 있어 <b>연식별 프로모션을 같이 비교</b>해 드립니다. 비슷한 크기의 전기 SUV를 원하시면 EQA를 보시면 됩니다."
  },
  "GLB": {
    tag: "실내가 넉넉한 박스형 SUV입니다. 디젤과 가솔린 사륜, AMG까지 있습니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["GLB 200 d", "6,430만원", "150마력", "9.2초", "13.7km/ℓ · 3등급"],
      ["GLB 250 4MATIC", "7,200만원", "224마력", "7.0초", "10.5km/ℓ · 4등급"],
      ["AMG GLB 35 4MATIC", "7,950만원", "306마력", "5.2초", "—"]
    ],
    dim: ["GLB 200 d 4,640 × 1,835 × 1,700mm", "GLB 250 4,650 × 1,845 × 1,690mm", "트렁크 565~1,805ℓ"],
    note: "GLA보다 길이가 약 230mm 길고 높이가 약 80mm 높아 <b>뒷좌석과 트렁크가 넉넉합니다.</b> 연비를 보시면 디젤 GLB 200 d(13.7km/ℓ), 힘과 사륜구동을 보시면 GLB 250 4MATIC입니다. GLB 250은 <b>3열 시트를 유료 선택사양</b>으로 더할 수 있어 가끔 일곱 명이 타야 하는 집에 맞습니다."
  },
  "GLC": {
    tag: "도심과 일상을 위한 프리미엄 SUV입니다. 첫 벤츠로 가장 많이 선택되는 모델입니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["GLC 220 d 4MATIC", "8,220만원", "197마력", "8.0초", "14.5km/ℓ · 2등급"],
      ["GLC 300 4MATIC", "7,700만원부터", "258마력", "6.2초", "10.6km/ℓ · 4등급"],
      ["GLC 300 4MATIC 쿠페", "8,000만원부터", "258마력", "6.3초", "10.6km/ℓ · 4등급"]
    ],
    dim: ["SUV 4,720 × 1,890 × 1,645mm · 트렁크 620ℓ", "쿠페 4,770 × 1,920 × 1,600mm · 트렁크 545ℓ", "휠베이스 2,890mm (동일)"],
    note: "SUV와 쿠페는 <b>휠베이스가 같아 뒷좌석 무릎 공간은 차이가 없습니다.</b> 갈리는 곳은 머리 공간과 트렁크(620ℓ vs 545ℓ)입니다. 뒷좌석을 매일 쓰시면 SUV, 디자인을 먼저 보시면 쿠페입니다. 48V 마일드 하이브리드가 들어가 저속 재가속이 매끄럽습니다."
  },
  "GLE": {
    tag: "여유로운 공간과 존재감. 패밀리 SUV로 넘어오시는 분들이 많습니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["GLE 300 d 4MATIC", "1억 1,920만원", "269마력", "6.9초", "11.6km/ℓ · 3등급"],
      ["GLE 350 4MATIC", "1억 1,800만원", "258마력", "7.5초", "8.6km/ℓ · 5등급"],
      ["GLE 450 4MATIC", "1억 2,900만원부터", "381마력", "5.6초", "8.4km/ℓ · 5등급"],
      ["GLE 450 d 4MATIC 쿠페", "1억 3,400만원", "367마력", "5.6초", "11.0km/ℓ · 4등급"],
      ["GLE 450 4MATIC 쿠페", "1억 4,250만원", "381마력", "5.6초", "8.2km/ℓ · 5등급"]
    ],
    dim: ["SUV 4,925 × 2,010 × 1,780mm · 트렁크 630~2,055ℓ", "쿠페 4,940 × 2,020 × 1,715mm · 트렁크 655~1,790ℓ", "휠베이스 SUV 2,995 / 쿠페 2,935mm"],
    note: "GLC에서 한 급 올라오시는 분이 많습니다. 트렁크가 <b>630ℓ에서 뒷좌석을 접으면 2,055ℓ</b>까지 늘어나 골프백 여러 개나 캠핑 짐이 그대로 들어갑니다. 연비를 보신다면 GLE 300 d(11.6km/ℓ, 3등급)가 가장 낫고, 힘을 보신다면 GLE 450입니다."
  },
  "GLS": {
    tag: "럭셔리 대형 SUV입니다. 7인승 구성과 옵션 조합을 함께 정리해 드립니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["GLS 450 d 4MATIC", "1억 5,400만원부터", "367마력", "6.1초", "10.0km/ℓ · 4등급"],
      ["GLS 450 4MATIC", "1억 5,400만원부터", "381마력", "6.1초", "7.9km/ℓ · 5등급"],
      ["GLS 580 4MATIC", "1억 9,340만원", "517마력", "4.9초", "6.6km/ℓ · 5등급"],
      ["AMG GLS 63 4MATIC+", "2억 1,000만원", "612마력", "4.2초", "6.3km/ℓ · 5등급"]
    ],
    dim: ["5,210 × 2,030 × 1,840mm", "휠베이스 3,135mm", "트렁크 355~2,400ℓ"],
    note: "<b>3열까지 성인이 앉을 수 있는 몇 안 되는 SUV</b>입니다. 3열을 세우면 트렁크가 355ℓ로 줄지만, 다 접으면 2,400ℓ가 됩니다. 대가족이거나 골프를 자주 다니시면 GLS 450 d가 무난하고, 연비 부담을 줄이시려면 디젤 쪽을 보셔야 합니다. 길이 5.2m라 주차 환경을 먼저 확인하시는 게 좋습니다."
  },
  "G-Class": {
    tag: "아이코닉 오프로더. 가격만큼 대기 기간과 재고 흐름이 중요한 모델입니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "복합연비"],
    rows: [
      ["G 450 d", "1억 9,970만원", "367마력", "5.8초", "10.0km/ℓ · 4등급"],
      ["AMG G 63", "2억 7,500만원", "585마력", "4.4초", "—"],
      ["AMG G 63 MANUFAKTUR", "3억 100만원", "585마력", "4.4초", "—"]
    ],
    dim: ["G 450 d 4,865 × 1,985 × 1,980mm", "AMG G 63 길이 4,875mm", "휠베이스 2,890mm · 트렁크 640~2,010ℓ"],
    note: "<b>재고 확보가 곧 출고 시기입니다.</b> 주문해서 받으시려면 대기가 길고, 국내에 들어와 있는 차를 잡는 것이 가장 빠릅니다. 마누팍투어는 물량이 특히 적습니다. 원하시는 외장·실내 조합을 알려주시면 지금 국내 재고부터 확인해 드리겠습니다."
  },
  "V-Class": {
    tag: "27년식으로 새로 들어온 프리미엄 MPV입니다. V 300 d 4MATIC 익스클루시브 한 가지 트림입니다.",
    cols: ["트림", "가격", "엔진", "변속기", "구동"],
    rows: [
      ["V 300 d 4MATIC 익스클루시브", "1억 2,400만원", "4기통 디젤", "9단 자동", "상시 사륜"]
    ],
    dimTitle: "좌석 · 편의",
    dim: ["뒷좌석 1열 럭셔리 시트 · 마사지 · 전동 종아리 받침대", "뒷좌석 2열 3인승 이지 엔트리 컴포트 벤치", "좌우 전동 슬라이딩 도어 · 전동 테일게이트"],
    note: "<b>의전 차량이나 대가족 차로 알맞은 모델</b>입니다. 뒷좌석 1열은 열선·통풍·마사지가 되는 럭셔리 시트에 전동 종아리 받침대까지 들어가고, 에어매틱 서스펜션·360° 카메라 주차 어시스트·부메스터 서라운드 사운드가 기본입니다. 트림은 하나이고 휠·실내 트림·나파 가죽 색상(블랙/실크 베이지)과 파노라믹 슬라이딩 루프(유료)를 고르실 수 있습니다. ※ 좌석을 떼어 내는 구조변경은 튜닝 승인 대상이라 출고 전에 미리 말씀해 주세요."
  },
  "Mercedes-AMG": {
    tag: "고성능 퍼포먼스 라인업입니다. 일상 주행과의 균형점을 기준으로 안내해 드립니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "비고"],
    rows: [
      ["AMG A 45 S 4MATIC+", "8,230만원", "421마력", "3.9초", "가장 접근하기 쉬운 AMG"],
      ["AMG GLB 35 4MATIC", "7,950만원", "306마력", "5.2초", "컴팩트 SUV"],
      ["AMG GLC 43 4MATIC", "1억 360만원부터", "421마력", "4.8초", "SUV · 쿠페"],
      ["AMG G 63", "2억 7,500만원", "585마력", "4.4초", "V8 오프로더"],
      ["AMG GLS 63 4MATIC+", "2억 1,000만원", "612마력", "4.2초", "대형 SUV"],
      ["AMG S 63 E Performance", "2억 9,900만원", "612마력 + 140kW", "3.3초", "플러그인 하이브리드 · 26년식"]
    ],
    dim: ["AMG 라이드 컨트롤 서스펜션", "AMG 퍼포먼스 배기", "4MATIC+ 가변 사륜구동"],
    note: "AMG는 <b>숫자보다 어디에 쓰실지가 중요합니다.</b> 매일 타시는 차라면 A 45 S나 GLC 43 쪽이 현실적이고, 세컨드 카로 두실 거면 G 63이나 GLS 63을 보셔도 됩니다. 시승 없이 결정하지 마시라고 늘 말씀드립니다 — 승차감 차이가 생각보다 큽니다."
  },
  "Mercedes-Maybach": {
    tag: "궁극의 럭셔리. 뒷좌석을 기준으로 S클래스와 갈리는 지점을 짚어 드립니다.",
    cols: ["트림", "가격", "최고출력", "0→100km/h", "트렁크"],
    rows: [
      ["Maybach S 580", "3억 1,700만원부터", "503마력", "4.8초", "505ℓ"],
      ["Maybach S 680", "4억 700만원", "630마력", "4.5초", "495ℓ"],
      ["Maybach GLS 600", "2억 9,500만원부터", "—", "—", "SUV"],
      ["Maybach EQS SUV", "2억 3,500만원", "—", "—", "전동화"]
    ],
    dim: ["S클래스 마이바흐 길이 5,470mm", "휠베이스 3,396mm", "S 580 롱보다 휠베이스 180mm 김"],
    note: "S클래스 롱과 마이바흐를 같이 보시는 분이 많습니다. 갈리는 지점은 <b>휠베이스 3,396mm — 롱보다 180mm 더 깁니다.</b> 뒷좌석 등받이 각도, 리어 도어 크기, 마감재가 다릅니다. 직접 뒷좌석에 앉아 보시면 차이가 바로 느껴집니다. 시승차 준비해 드리겠습니다."
  },
  "Electric": {
    tag: "차세대 전동화 라인업입니다. 지자체 보조금과 충전 환경까지 포함해 계산해 드립니다.",
    cols: ["트림", "가격", "모터 출력", "1회 충전 주행거리", "비고"],
    rows: [
      ["EQA 250", "7,080만원부터", "140kW", "367km", "0→100 8.6초"],
      ["EQE 350+", "1억 1,000만원", "235kW", "490km", "세단"],
      ["EQS 450 4MATIC SUV", "1억 6,600만원", "265kW", "498km", "배터리 118kWh"],
      ["EQS 580 4MATIC SUV", "1억 9,200만원", "400kW", "480km", "배터리 118kWh"],
      ["전기 CLA", "5,290만원부터", "—", "—", "800V 급속 충전"],
      ["전기 GLC (런치 에디션)", "9,000만원부터", "—", "—", "제원 미공개"]
    ],
    dim: ["EQA 4,465mm · 트렁크 340~1,320ℓ", "EQE 4,965mm · 트렁크 430ℓ", "EQS SUV 5,125mm · 트렁크 645~2,100ℓ"],
    note: "전기차는 <b>차값보다 보조금과 충전 환경이 실구매가를 좌우합니다.</b> 지자체마다 보조금이 달라서 거주지를 알려주시면 정확히 계산해 드립니다. 금융 조건도 내연기관과 다릅니다 — 무이자 할부가 60개월까지 늘어나고 운용리스 금리가 훨씬 낮습니다. ※ 전기 GLC는 국내 출시 사양의 배터리·주행거리가 아직 공개되지 않았습니다."
  }
};

/* ── 공통 계산 — 할인율·금액은 전부 여기서 ─────────────── */
var won = new Intl.NumberFormat("ko-KR");
var MON = PRICE_MONTH + "월";
var KAKAO = "https://open.kakao.com/o/s35suoRh";
var TEL = "01031130328", TEL_TXT = "010-3113-0328";
function esc(v){ return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function man(v){ return Math.round(v / 10000); }
/* 7,750만원 / 1억 5,400만원 */
function manStr(v){ var m = man(v), e = Math.floor(m / 10000), r = m % 10000;
  return r ? (e ? e + "억 " : "") + won.format(r) + "만원" : e + "억원"; }
function tot(r){ return r.fin + r.ret + r.trade; }                 /* 현금+할부+재구매+트레이드인 */
function bestOf(r){ return Math.round(r.msrp * (1 - r.fin / 100)); } /* 할인 적용가(현금+할부) */
function maxOf(r){ return Math.round(r.msrp * (1 - tot(r) / 100)); } /* 최대 할인가 */
function cutOf(r){ return man(r.msrp) - man(maxOf(r)); }           /* 최대 할인 금액(만원) */
function key(r){ return r.year + "|" + r.trim; }
function yb(r){ return '<span class="yb y' + r.year + '">' + r.year + '년식</span>'; }
function byDeal(a, b){ return (tot(b) - tot(a)) || (b.msrp * tot(b) - a.msrp * tot(a)); }
function mixOf(r){
  var p = [];
  if (r.cash) p.push("현금 " + r.cash + "%");
  if (r.fin > r.cash) p.push("할부 " + (r.fin - r.cash) + "%");
  if (r.ret) p.push("재구매 " + r.ret + "%");
  if (r.trade) p.push("트레이드인 " + r.trade + "%");
  return p.join(" + ");
}
/* 라인업 카드(차종) 하나에 해당하는 가격표 행 — AMG·마이바흐·전기차 카드는 묶음이 다르다 */
function rowsOfModel(k){
  return PRICE_ROWS.filter(function(r){
    if (k === "Mercedes-AMG") return r.model === "Mercedes-AMG";
    if (k === "Mercedes-Maybach") return r.model === "Mercedes-Maybach";
    if (k === "Electric") return r.seg === "ev";
    return famOf(r) === k;
  });
}
function cardOf(k){ for (var i = 0; i < MODEL_CARDS.length; i++) if (MODEL_CARDS[i].key === k) return MODEL_CARDS[i]; return null; }

/* 할부 계산기 빠른 설정 — 이번 달 공문의 대표 할부 조건(가격표 아래 안내문과 같은 내용) */
var FIN_PRESETS = [
  { name:"24개월 무이자", note:"선수금 61~63%", months:24, rate:0, down:61 },
  { name:"60개월 연 5.20%~", note:"선수금 30%", months:60, rate:5.2, down:30 }
];
