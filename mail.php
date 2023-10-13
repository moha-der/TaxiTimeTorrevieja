<?php 

    // Establece el encabezado Access-Control-Allow-Origin para permitir solicitudes desde la URL específica
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
        
        
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $to = "Taxitorrevieja38@gmail.com";
        $from = $_POST["email"]; // this is the sender's Email address
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
        $subject = "Taxi Time Torrevieja";
        $baby = $_POST["baby"];
        $infants = $_POST["infants"];
        $surname = $_POST["surname"];
        $disabled = $_POST["disabled"];
        $extra = $_POST["extra"];

        $message = '
        <html>
        <head>
        <title>Datos de la reserva</title>
        <style>
                table {
                    width: 80%;
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
        <tr><td>Surname: </td><td>'.$surname.'</td></tr>
        <tr><td>Phone Number: </td><td>'.$phone_number.'</td></tr>
        <tr><td>Email: </td><td>'.$email.'</td></tr>
        <tr><td>Flight: </td><td>'.$flight.'</td></tr>
        <tr><td>Origin Location: </td><td>'.$origin.'</td></tr>
        <tr><td>Drop Location: </td><td>'.$drop.'</td></tr>
        <tr><td>Date: </td><td>'.$date.'</td></tr>
        <tr><td>Time: </td><td>'.$time.'</td></tr>
        <tr><td>Adults: </td><td>'.$adults.'</td></tr>
        <tr><td>Children (3 to 8): </td><td>'.$child.'</td></tr>
        <tr><td>Baby (0 to 1): </td><td>'.$baby.'</td></tr>
        <tr><td>Infants (1 to 3): </td><td>'.$infants.'</td></tr>
        <tr><td>Payment Method: </td><td>'.$payment.'</td></tr>
        <tr><td>Vehicle adapted for disabled: </td><td>'.$disabled.'</td></tr>
        <tr><td>Extra Description: </td><td>'.$extra.'</td></tr>
        </table>
        </body>
        </html>
        ';

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: Taxitorrevieja38@gmail.com' . "\r\n";
        mail($to,$subject,$message,$headers);
        $message2 = "Taxi Time Torrevieja" . "\r\n";
        $message2 = "We have received your request, we will contact you" . "\r\n";
        $message2 .= "Hemos recibido su solicitud, nos pondremos en contacto con usted";
        mail($email,$subject,$message2,$headers);
        $response = array("mensaje" => "OK");
        header("Content-Type: application/json");
        echo json_encode($response);
    } else {
        echo json_encode(array("mensaje" => "No se puede acceder a esta página"));
    }
 
    
?>