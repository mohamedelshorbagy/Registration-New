<?php
require 'PHPMailer/PHPMailer/PHPMailerAutoload.php';
inlcude 'confing.php';


$db = getDB();



// Get All Mails 

$stmt = $db->prepare('SELECT id, email, random FROM  test WHERE STATUS =  'Visitor' LIMIT 0 , 30');


$stmt->execute();


$result = $stmt->fetchAll();


foreach($result as $single) {


		$mail = new PHPMailer;
		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->SMTPDebug = 2;
		$mail->Debugoutput = 'html';
		$mail->Host = 'secure144.inmotionhosting.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'visitors@eed.eg';                 // SMTP username
		$mail->Password = 'EEDRegistrationTeam2017';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;                                    // TCP port to connect to
		$mail->setFrom('reg@eed.eg', 'EED Confirmation Mail');
		$mail->addAddress($single['email'] , 'Visitor');
		$mail->isHTML(true);
		$mail->Subject = '[EED\'17] Your Visitor Ticket';
		$mail->Body    = 'Dear EED Visitor, <br /> <br /> <br />

		We hope this mail finds you well. <br /> <br />

		You\'re receiving this mail as a response to your registration throughout our online registration portal.<br /><br />

		Kindly, visit the link below to print your ticket before arriving at the exhibition. You can\'t attend the event without the ticket, so please don\'t forget it. <br /><br />

		[<a href="http://visitors.eed.eg/ticket.php?unique='.$single['random'].'">Click Here</a>] <br /> <br />

		Thanks a lot for your interest to attend our event.<br />
		--<br />
		Best Regards, <br /> <br />

		Registration Team | Egyptian Engineering Day<br />
		IEEE - Young Professionals - Egypt Section<br />
		Website: www.eed.eg | www.ieee.org.eg<br />';


		if (!$mail->send()) {
		    echo "Mailer Error: " . $mail->ErrorInfo . " ID Number =>  (  '".$single['id']."'  ) ";
		} else {
		    echo "Message sent!";
		}






}





?>
