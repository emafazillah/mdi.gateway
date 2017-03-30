function ItemBuilderCard(deviceGroup, device) {
    var html = "";
    html += "<div class='col-sm-4'>";
    html += "<div class='panel panel-default'>";
    html += "<div class='panel-heading'><a href='./properties.html?dc=" + deviceGroup + "&id=" + device.device_id + "'>" + device.device_id + " : " + device.brand + ' ' + device.model + "</a></div>";
    html += "<table class='table small'>";
    html += "<tbody>";
    html += "<tr><td style='vertical-align:top; height:50px; width:120px;'>Location</td><td style='vertical-align:top'>:</td><td style='vertical-align:'top'>" + device.location.location_name + "</td></tr>";
    html += "<tr><td>IPV4 </td><td>:</td><td>" + device.location.ipv4 + "</td></tr>";
    html += "<tr><td>Connection Type </td><td>:</td><td>" + device.location.connection + "</td></tr>";
    html += "<tr><td>Method</td><td>:</td><td>Terminal</td></tr>";
    html += "</tbody>";
    html += "</table>";
    html += "</div>";
    html += "</div>";
    return html;
}

function ItemBuilderList(deviceGroup, no, device) {
    var html = "";
    html += "<tr>";
    html += "<td>" + (no + 1) + "</td>";
    html += "<td></td>";
    html += "<td><a href='./properties.html?dc=" + deviceGroup + "&did=x'>" + device.device_id + " : " + device.brand + ' ' + device.model + "</a></td>";
    html += "<td>" + device.location.location_name + "</td>";
    html += "<td class='text-center'>" + device.status + "</td>";
    html += "<td>" + device.location.ipv4 + "</td>";
    html += "<td>" + device.location.connection + "</td>";
    html += "</tr>";
    return html;
}

function ListTrigger(item) {
    var showList = $('.showlist');
    $.each(showList, function (i, k) {
        $(showList).removeClass('active');
    });
    $(showList[item]).addClass('active');
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function DeviceGroupActive(current) {
    var group = $('.sidebar-nav li a');
    $('.sidebar-nav li a').removeClass('active');
    $.each(group, function (i, v) {
        var href = $(v).attr('href');
        var clean = href.replace('?dc=', '');
        if (current == clean) {
            $(this).addClass('active');
        }
    });
}

function Pinger_ping(ip, callback) {

  if(!this.inUse) {

    this.inUse = true;
    this.callback = callback
    this.ip = ip;
    console.log(ip);
    var _that = this;
    
    console.log(_that.good());

    this.img = new Image();

    this.img.onload = function() {_that.good();};
    this.img.onerror = function() {_that.good();};

    this.start = new Date().getTime();
    this.img.src = "http://" + ip;
    this.timer = setTimeout(function() { _that.bad();}, 1500);

  }
}