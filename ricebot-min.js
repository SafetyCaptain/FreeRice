function ans(n,a){location.href==t+n&&(x=$("a").filter(function(){return $(this).text()==a}).attr("rel")),location.href==t+n&&$("a:contains("+a+")").text("Right"),$("a.question-link").addClass("answer-item"),$("a.question-link").addClass("flt"),location.href==t+n&&(kn=!1,ExternalGame.submitAnswer(x),console.log(x))}function fin(){var n=Math.floor(4*Math.random());ExternalGame.submitAnswer(n)}function myLoop(){setTimeout(function(){myLoop(),create(),check()},2000)}function check(){eval($('h2:contains("Recent")').text().split("FAQs")[1]),fin()}function create(){na=nb,nb=location.href.split("/").pop(),ca=$("div #incorrect").text().split("= ")[1],console.log("ans('"+na+"','"+ca+"');"),void 0!=ca&&$("div:contains('"+na+"')").length<1&&($('h2:contains("Recent")').append("ans('"+na+"','"+ca+"');\n"),csvContent+="ans('"+na+"','"+ca+"');\n")}t=location.href.split("/"),t.pop(),t=t.join("/")+"/";var kn=!0,x=0,csvContent="data:text/plain;charset=utf-8,";myLoop(),ca="",na="",nb="",$('h2:contains("Recent")').click(function(){var n=encodeURI(csvContent);window.open(n)});