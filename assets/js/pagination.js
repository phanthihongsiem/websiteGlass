
function getPageList(totalPage, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPage <= maxLength) {
        return range(1, totalPage);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPage - sideWidth + 1, totalPage));
    }
    if (page >= totalPage - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPage - sideWidth - 1 - rightWidth - leftWidth, totalPage));
    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPage - sideWidth + 1, totalPage));
}
$(function () {
    var numberOfItem = $(".products .item1").length;
    var limitPerPage = 8;
    var totalPage = Math.ceil(numberOfItem / limitPerPage);
    var paginationSize = 7;
    var currentPage;
    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPage) return false;
        currentPage = whichPage;
        $(".products .item1").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination li").slice(1, -1).remove();

        getPageList(totalPage, currentPage, paginationSize).forEach(item1 => {
            $("<li>").addClass("page-item").addClass(item1 ? "current-page" : "dots")
                .toggleClass("active", item1 === currentPage).append($("<a>").addClass("page-link")
                    .attr({ href: "javascript:void(0)" }).text(item1 || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPage);
        return true;
    }


    $(".pagination").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("<")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(">"))

    );
    $(".products").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });
    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });
    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });
});