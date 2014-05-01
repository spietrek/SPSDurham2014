<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <link rel="Stylesheet" type="text/css" href="../lib/toastr/toastr.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/LinksApp.css" />
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Links
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div id="content" data-ng-app="linksApp" data-ng-controller="linksController">
        <div csg-links template-url="LinksTemplate.html" web-part-title="webPartTitle" links="links" links-count="linksCount"
            refresh-data="refreshData" open-list="openList" error-message="errorMessage">
        </div>
    </div>

    <!--
        X 1. Add support for logging
        X 2. Add support to show toasts
        3. Add support to select different link groups
        4. Add support to create/delete links from directive
        5. Add support to open list from directive
        6. Add support to refresh data from directive
        7. Add support to retrieve urls from commonService
        8. Add button to display an error
    -->

    <script type="text/javascript" src="../lib/jquery/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../lib/jquery/jquery.url.js"></script>
    <script type="text/javascript" src="../lib/angular/angular.min.js"></script>
    <script type="text/javascript" src="../lib/toastr/toastr.min.js"></script>
    <script type="text/javascript" src="../Scripts/app.js"></script>
    <script type="text/javascript" src="../Scripts/common.js"></script>
    <script type="text/javascript" src="../Scripts/logger.js"></script>
    <script type="text/javascript" src="../Scripts/controllers/links.ctrl.js"></script>
    <script type="text/javascript" src="../Scripts/directives/links.dir.js"></script>
    <script type="text/javascript" src="../Scripts/services/links.data.srv.js"></script>

</asp:Content>
