const { response } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");

var url = 'http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=qDZOdMBw6HD7K4W9U4fy8YdSX6U%2B44%2FEWpqtbqFUEsWN%2Fd9caCiViPXK8iauzSSOuy32ju2M8AUtjtdwv3MPeA%3D%3D'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* */
// queryParams += '&' + encodeURIComponent('entpName') + '=' + encodeURIComponent('한미약품(주)'); /* */
// queryParams += '&' + encodeURIComponent('itemName') + '=' + encodeURIComponent('한미아스피린장용정100밀리그램'); /* */
// queryParams += '&' + encodeURIComponent('itemSeq') + '=' + encodeURIComponent('200003092'); /* */
// queryParams += '&' + encodeURIComponent('efcyQesitm') + '=' + encodeURIComponent('이 약은 심근경색, 뇌경색, 불안정형 협심증에서 혈전 생성 억제와...'); /* */
// queryParams += '&' + encodeURIComponent('useMethodQesitm') + '=' + encodeURIComponent('성인은 1회 1정, 1일 1회 복용합니다..'); /* */
// queryParams += '&' + encodeURIComponent('atpnWarnQesitm') + '=' + encodeURIComponent('매일 세잔 이상 정기적 음주자가 이 약 또는 다른 해열진통제를 복용할 때는...'); /* */
// queryParams += '&' + encodeURIComponent('atpnQesitm') + '=' + encodeURIComponent('이 약 또는 다른 살리실산제제, 진통제, 소염제, 항류마티스제에 대한 과민증 환자...'); /* */
// queryParams += '&' + encodeURIComponent('intrcQesitm') + '=' + encodeURIComponent('다른 비스테로이드성 소염진통제 및 살리실산 제제, 일주일 동안 메토트렉세이트 15밀리그람...'); /* */
// queryParams += '&' + encodeURIComponent('seQesitm') + '=' + encodeURIComponent('쇽 증상(예: 호흡곤란, 전신조홍, 혈관부종, 두드러기), 천식발작, 과민증(홍반)...'); /* */
// queryParams += '&' + encodeURIComponent('depositMethodQesitm') + '=' + encodeURIComponent('습기를 피해 실온에서 보관하십시오.'); /* */
// queryParams += '&' + encodeURIComponent('openDe') + '=' + encodeURIComponent('20200901'); /* */
// queryParams += '&' + encodeURIComponent('updateDe') + '=' + encodeURIComponent('20200905'); /* */
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */


router.get("/", (req, res) => {
    request(
        {
            url: url + queryParams,
            method: "GET",
        },
        (error, response, body)=> {
            res.send(body);
        }
    );
});

module.exports = router;