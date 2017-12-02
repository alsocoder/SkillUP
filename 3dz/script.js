alert('Im - JavaScript!');

/*
Какой скрипт выполнится первым в примере ниже :
a)
<script src="big.js"></script>    Run first
<script src="small.js"></script>
б)
<script async src="big.js"></script>
<script async src="small.js"></script>  Run first
в)
<script defer src="big.js"></script>    Run first
<script defer src="small.js"></script>


*/
var admin;
var name = 'Serjant';
admin = name;
alert(admin);
