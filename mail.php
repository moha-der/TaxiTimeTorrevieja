<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to = $_POST["email"]; // this is your Email address
    $from = "simo.derfoufi.99@gmail.com"; // this is the sender's Email address
    $first_name = $_POST["name"];
    $phone_number = $_POST["number"];
    $email = $_POST["email"];
    if (isset($_POST["flight"])) {
        $flight = $_POST["flight"];
    } else {
        $flight = "";
    }
    $origin = $_POST["origin"];
    $drop = $_POST["drop"];
    $date = $_POST["Date"];
    $time = $_POST["Time"];
    $adults = $_POST["adult"];
    $child = $_POST["child"];
    $payment = $_POST["payment"];
    $subject = "Booking dates";

    $message = '
    <html>
    <head>
      <title>Datos de la reserva</title>
      <style>
            table {
                width: 50%;
                border: 1px solid #ccc;
                border-collapse: collapse;
                }
    
            th, td {
                padding: 15px;
                text-align: left;
                border-right: 1px solid #ccc; /* Borde derecho para las celdas de los nombres */
            }
    
            tr:hover {
                background-color: #f5f5f5;
            }
            tr{
                border: 1px solid #ccc;
            }
        </style>
    </head>
    <body>
      <h2>Reservation Data</h2>
      <table>
      <tr><td>Name: </td><td>'.$first_name.'</td></tr>
      <tr><td>Phone Number: </td><td>'.$phone_number.'</td></tr>
      <tr><td>Email: </td><td>'.$email.'</td></tr>
      <tr><td>Flight: </td><td>'.$flight.'</td></tr>
      <tr><td>Origin Location: </td><td>'.$origin.'</td></tr>
      <tr><td>Drop Location: </td><td>'.$drop.'</td></tr>
      <tr><td>Date: </td><td>'.$date.'</td></tr>
      <tr><td>Time: </td><td>'.$time.'</td></tr>
      <tr><td>Adults: </td><td>'.$adults.'</td></tr>
      <tr><td>Childrens: </td><td>'.$child.'</td></tr>
      <tr><td>Payment Method: </td><td>'.$payment.'</td></tr>
      </table>
    </body>
    </html>
    ';

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: simo.derfoufi.99@gmail.com' . "\r\n";
    mail($to,$subject,$message,$headers);
    $response = array("mensaje" => "OK");
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    echo json_encode(array("mensaje" => "ERROR"));
}
    
    
?>