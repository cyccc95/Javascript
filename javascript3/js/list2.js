let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// 데이터 수 많큼 카드 만들기
products.forEach((a, i) => {
  let 템플릿 =
  `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button class="buy">구매</button>
    </div>  
  `;
$('.row').append(템플릿); 
});

// 더보기 버튼으로 데이터 가져오기
$('#more').click(function(){
  $.get('https://codingapple1.github.io/js/more1.json')
  .done((data) => {
    console.log(data);
    data.forEach((a, i) => {
      let 템플릿 =
      `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${data[i].title}</h5>
          <p>가격 : ${data[i].price}</p>
        </div>  
      `;
      $('.row').append(템플릿); 
    });
  })
})

// array 정렬
let 어레이 = [7,3,5,2,40];

어레이.sort(); //문자순으로 정렬
console.log(어레이);

어레이.sort(function(a,b){ //오름차순 숫자 정렬
  return a - b              // return 양수 => a 우측으로감
});                         // return 음수 => b 우측으로감
console.log(어레이);

어레이.sort(function(a,b){ //내림차순 숫자 정렬
  return b - a
});
console.log(어레이);

let 어레이2 = ['b','a','c'];
어레이2.sort(); //문자 가나다 순 정렬
console.log(어레이2);

// array 필터
let 새어레이 = 어레이.filter(function(a){ // filter는 원본은 변형시켜서 변수에 저장시켜서 써야함
  return a < 4
});
console.log(새어레이);

let 새어레이2 = 어레이.map(function(a){ // array 자료 전부 변형
  return a * 4
});
console.log(새어레이2);

// 버튼 누르면 products 안의 데이터 가격순 정렬
$('#price').click(function(){
  products.sort(function(a, b){
    return a.price - b.price
  })
  
  $('.row').html(''); // 카드 3개있던 div의 내용 제거

  products.forEach((a, i) => {
  let 템플릿 =
  `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>  
  `;
  $('.row').append(템플릿); 
  });
  })

  // 버튼 누르면 다나가순 정렬
  $('#sort1').click(function(){
    products.sort(function(a,b){
      if ( a.title < b.title) {
        return 1;
      } else {
        return -1;
      }
    });

    $('.row').html(''); // 카드 3개있던 div의 내용 제거

    products.forEach((a, i) => {
    let 템플릿 =
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
      </div>  
    `;
    $('.row').append(템플릿); 
    });
  }); 

  // 버튼 누르면 60000이하 상품만
  $('#filter').click(function(){
    let newProducts = products.filter(function(a){
      return a.price <= 60000;
    })

    $('.row').html(''); // 카드 3개있던 div의 내용 제거

    newProducts.forEach((a, i) => {
    let 템플릿 =
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
      </div>  
    `;
    $('.row').append(템플릿); 
    });
  })

  // localStorage 저장하는법
  localStorage.setItem('이름','kim');
  localStorage.getItem('이름');
  localStorage.removeItem('이름');

  let arr = [1,2,3];
  let newArr = JSON.stringify(arr);
  localStorage.setItem('num',newArr);

  let 꺼낸거 = localStorage.getItem('num');
  console.log(JSON.parse(꺼낸거));

  // 구매 버튼 누르면 장바구니 담기
  $('.buy').click(function(e){
    let title = $(e.target).siblings('h5').text(); //siblings : 형제요소 선택해줌
    if( localStorage.getItem('cart') != null ){
      let 꺼낸거 = JSON.parse(localStorage.getItem('cart'));
      꺼낸거.push(title);
      localStorage.setItem('cart', JSON.stringify(꺼낸거));
    } else {
      localStorage.setItem('cart', JSON.stringify([title]));
    } 
  })