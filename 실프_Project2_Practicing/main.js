<!DOCTYPE html>
<html>
<head>
<script>
function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
}
</script>
</head>
<body>

<form onsubmit="confirmInput()" action="https://www.w3schools.com/">
  Enter your name: <input id="fname" type="text" size="20">
  <input type="submit">
</form>

</body>
</html>


    <script>
        document.genElementByld('editForm'),addEvenListener('submit', function(event) {
            event.preventDefault();

            var name =document.genElementByld('name')value;
            var name =document.genElementByld('relationship')value;
            var name =document.genElementByld('phonenumber')value;
            var name =document.genElementByld('birthday')value;

            alert('게시물을 수정할까요?')
            
        })
    </script>

</body>
</html>
