(this.webpackJsonpfinder=this.webpackJsonpfinder||[]).push([[0],{23:function(e,t,a){e.exports=a(69)},29:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(10),s=a(3),i=a.n(s),u=a(4),m=a(5),p=a(6),h=a(8),g=a(7),f=a(9),d=(a(29),function(e){var t=e.onSubmitForm;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:t},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}),y=a(1),v=a.n(y),b=function(e){var t=e.everyItem,a=e.onOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t.webformatURL,alt:t.type,className:"ImageGalleryItem-image",onClick:function(){return a(t.largeImageURL)}})))};b.prototype={galeryItem:v.a.arrayOf(v.a.shape({id:v.a.string,largeImageURL:v.a.string,type:v.a.string}).isRequired).isRequired};var I=b,w=function(e){var t=e.galeryItem,a=e.largeImageURL,n=e.onOpen;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(I,{everyItem:e,key:e.id,galeryItem:t,onOpen:n,largeImageURL:a})})))},E=a(21),S=a.n(E),k=(a(49),a(22)),O=a.n(k),j=function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"black"}},r.a.createElement(O.a,{type:"Audio",color:"#00BFFF",height:100,width:100,timeout:2e3})))},x=function(e){var t=e.text;return r.a.createElement("h2",null,"OOOPPPPSSSSS, somethink went wrong: ",t)},N=function(e){var t=e.uploadMoreImg;return r.a.createElement("button",{className:"Button",onClick:t,type:"button"},"Load more")},L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e){"Escape"===e.key&&a.props.onClose()},a.closeByClick=function(e){e.target!==e.currentTarget&&a.props.onClose()},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.url;return r.a.createElement("div",{className:"Overlay"},r.a.createElement("div",{onClick:this.closeByClick,className:"Modal"},r.a.createElement("img",{src:e,alt:"photo"})))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:"corona virus",page:1,galeryItem:[],isLoading:!1,error:null,largeImageURL:null,openModal:!1},a.onSubmitForm=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({searchQuery:t.target.elements[1].value});case 3:return e.next=5,a.setState({galeryItem:[]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.uploadMoreImg=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState((function(e){return{page:e.page+1}}));case 2:return e.next=4,a.startNewImagesSearch();case 4:case"end":return e.stop()}}),e)}))),a.setLargeImage=function(e){a.setState({largeImageUrl:e}),a.toggleModal()},a.toggleModal=function(){a.setState((function(e){return{openModal:!e.openModal}}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.startNewImagesSearch();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.searchQuery,window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n===a.searchQuery){e.next=5;break}return e.next=5,this.startNewImagesSearch();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"startNewImagesSearch",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.searchQuery,n=t.page,r="https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=").concat("15302072-a81be31270c5e4995077a81d4","&image_type=photo&orientation=horizontal&per_page=12/"),this.setState({isLoading:!0}),e.next=5,S.a.get(r).then((function(e){var t=e.data;o.setState((function(e){return{galeryItem:[].concat(Object(l.a)(e.galeryItem),Object(l.a)(t.hits))}}))})).catch((function(e){return o.setState({error:e})})).finally((function(){o.setState({isLoading:!1})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.galeryItem,a=e.searchQuery,n=e.isLoading,o=e.error,c=e.largeImageUrl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,{onSubmitForm:this.onSubmitForm,searchQuery:a}),o&&r.a.createElement(x,{error:o.message}),n&&r.a.createElement(j,null),t.length>0&&r.a.createElement(w,{galeryItem:t,onOpen:this.setLargeImage}),t.length>0?r.a.createElement(N,{uploadMoreImg:this.uploadMoreImg}):r.a.createElement(x,null),this.state.openModal&&r.a.createElement(L,{url:c,onClose:this.toggleModal})))}}]),t}(n.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f5c8ca08.chunk.js.map