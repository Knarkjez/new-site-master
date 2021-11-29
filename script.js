window.onload = function(){
   let hamburger__img=document.getElementById('hamburger__img');
   let menu=document.getElementById('menu');
   let menu__list=document.getElementById('menu__list');
   hamburger__img.onclick=function(){
      if(menu.className==='menu', menu__list.className==='menu__list'){
         menu.className='show__menu';
         menu__list.className='show__menu-list';
      }else{
         menu.className='menu';
         menu__list.className='menu__list';
      }
   }
}