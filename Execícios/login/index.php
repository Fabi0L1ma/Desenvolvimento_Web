<?php 

    if(isset($_POST['submit'])){

        include_once('config.php');

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $senha = $_POST['senha'];

        $result = mysqli_query($conexao, "INSERT INTO clientes(nome, email, telefone, senha) VALUE('$nome', '$email', '$telefone', '$senha')");
    }
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./css/cadastro.css">
    <title>Tela de Cadastro</title>
</head>
<body>
    <div class="container">
        <form action="index.php" method="POST">
            <h1>Cadastre-se</h1>
            <div class="input-box">
                <input type="text" name="nome"  placeholder="usuário" required id="usuario">
                <i class='bx bxs-user'></i>
            </div>

            <div class="input-box">
                <input type="email" name="email" placeholder="email@gmail.com" required id="email">
                <i class='bx bxl-gmail'></i>
            </div>

            <div class="input-box">
                <input type="text" name="telefone" placeholder="telefone" required id="telefone">
                <i class='bx bx-phone'></i>
            </div>

            <div class="input-box">
                <input type="password" name="senha" placeholder="senha" required id="senha">
                <i class='bx bxs-lock-alt'></i>
            </div>

            <div class="lembre-se">
                <label><input type="checkbox">Lembre-se</label>
            </div>

            <input type="submit" name="submit" class="botao" value="cadastrar"></input>
        </form>
    </div>

</body>
</html>