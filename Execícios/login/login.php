<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./css/login.css">
    <title>Tela de login</title>
</head>
<body>
    <div class="container">
        <form action="testeLogin.php" method="POST">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" name="email" placeholder="usuário" required id="usuario">
                <i class='bx bxs-user'></i>
            </div>

            <div class="input-box">
                <input type="password" name="senha" placeholder="senha" required id="senha">
                <i class='bx bxs-lock-alt'></i>
            </div>

            <div class="lembre-se">
                <label><input type="checkbox">Lembre-se</label>
                <a href="#">esqueceu a senha?</a>
            </div>

            <button type="submit" name="submit" class="botao">Login</button>

            <div class="register-link">
                <p>não tem cadastro? <a href="index.php">cadastre-se</a> </p>
            </div>
        </form>
    </div>

</body>
</html>