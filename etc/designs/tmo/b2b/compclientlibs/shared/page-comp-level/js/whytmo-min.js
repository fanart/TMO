$(document).ready(function(){$(".whytmo").length&&($(".carousel-control").click(function(){$(".item:not(.active) .animated").removeClass("slideInLeft slideInRight").addClass($(this).hasClass("left")?"slideInLeft":"slideInRight")}),$(".whytmo").on("swipeleft",function(){$(".item:not(.active) .animated").removeClass("slideInLeft slideInRight").addClass("slideInRight")}),$(".whytmo").on("swiperight",function(){$(".item:not(.active) .animated").removeClass("slideInLeft slideInRight").addClass("slideInLeft")}))});
//# sourceMappingURL=./whytmo-min.map