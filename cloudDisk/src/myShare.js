/**
 * Created by bobo on 2016/9/29.
 */
$(function(){
    function Share(){
        this.root = $('#js_content');
        this.init = function(){
            this.initClick();
            this.initList();
            this.getAccess('11111');
        }
    }
    Share.prototype = {
        initList:function(){
            var self = this;
            var url = '';
            $.get(url, function(data){
                self._addList(data);
            },'json');
        },
        initClick:function(){
            var self = this;
            self.root.on('click', function(e){
                var tg = $(e.target);
                var lis = $(this).find('.my-space');
                if(tg.hasClass('my-space')){
                    lis.each(function(){
                        $(this).removeClass('on');
                    });
                    tg.addClass('on');
                    self._getData();
                }
            });
        },
        _getData:function(){
            var self = this;
            var url = '';
            $.get(url, function(data){
                self._addTab(data);
            },'json');
        },
        _addList:function(data){
            var self = this;
            var html = '';
            for(var i = 0;i<data.length;i++){
                html += '<li><a><img class="icon" src="../images/u328.png"><span class="my-space">直播项目资料</span></a></li>';
            }
            self.root.html(html);
            $('.my-space').first().trigger('click');
        },
        _addTab:function(data){
            var html = '';
            for(var i = 0;i<data.length;i++){
                html += '<tr><td class="tb-check"><label><input class="tb-checkbox" type="checkbox"></label></td>' +
                '<td class="tb-name"><span>张某</span></td><td class="tb-phone"><span>15637891023</span></td>' +
                '<td class="tb-email"><span>www@mmm.com</span></td><td class="tb-permission">' +
                '<label><input type="radio" value="up"><span>上传</span></label>' +
                '<label><input type="radio" value="down"><span>下载</span></label>' +
                '<label><input type="radio" value="read"><span>预览</span></label>' +
                '<label><input type="radio" value="up"><span>重命名</span></label>' +
                '<label><input type="radio" value="down"><span>删除</span></label>' +
                '<label><input type="radio" value="read"><span>创建文件夹</span></label></td>' +
                '<td class="tb-search"></td></tr>';
            }
            $('#data').html(html);
        },
        getAccess:function(string){
            var access = string.split('');
            if(access.length<6){
                console.log('位数不足');
            }else{
                console.log(access);
            }
        }
    };
    new Share().init();
});