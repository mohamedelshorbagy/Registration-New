<?php 


    
    include 'confing.php';

    /* 
        1 : 		$qr->text($random);


        2 :		    $qr->qrCode(200 , 'images/' . $random . '.png');

        3 : Link Of Ticket ==> ticket.php?unique=19856325

    */


    $formErros = array();
    

        

       

    if(isset($_POST['submit']) && $_SERVER['REQUEST_METHOD'] == 'POST') {


        // Get the DB
        $db = getDB();

        // Name
        $name = filter_var($_POST['username'],FILTER_SANITIZE_STRING);

        $email = filter_var($_POST['email'],FILTER_SANITIZE_STRING);

        $phone = filter_var($_POST['phone'],FILTER_SANITIZE_STRING);

        

        if(strlen($phone) > 11) {

            $formErros[] = 'Phone Number has Only 11 Numbers';

        }



        // Randomitation Algorithm 
        
    // Generate Random Number or Voucher 

    $uniqeNumber = "123456789";

        // Random Number
		$random = '';


        


		for($i = 0 ; $i <= 7; ++$i) {
				$randNumber = floor(rand(0 , strlen($uniqeNumber)));
                $checkRandom = substr($uniqeNumber, $randNumber , 1);
                if($checkRandom == "") {
                    $checkRandom = '2';
                }
        		$random .= $checkRandom;

        }



        if ($_POST['registerStat'] == 'Entitty'){
            // registerStat == 'Entitty'

            // Name Of Organization

            $status = filter_var($_POST['registerStat'],FILTER_SANITIZE_STRING);

            $organization = filter_var($_POST['organization'],FILTER_SANITIZE_STRING);

            $commers = filter_var($_POST['commers'],FILTER_SANITIZE_NUMBER_INT);

            $day = filter_var($_POST['day'], FILTER_SANITIZE_NUMBER_INT);

            // $national = filter_var($_POST['national'],FILTER_SANITIZE_NUMBER_INT);

            if($commers > 50) {

                $formErros[] = 'Commers take a Maximum Number of 50';

            }


            // if(strlen($national) > 14) {
            //     $formErros[] = 'National ID Only has 14 Numbers';

            // }

        


               $avatar = $_FILES['avatar'];
        
//         Values in Avatar
        
        $avatarName = $_FILES['avatar']['name'];
        $avatarTempName = $_FILES['avatar']['tmp_name'];
        $avatarSize = $_FILES['avatar']['size'];
        $avatarType = $_FILES['avatar']['type'];


        $backAvatar = $_FILES['backImage'];

        $backImageName = $_FILES['backImage']['name'];
        $backImageTempName = $_FILES['backImage']['tmp_name'];
        $backImageSize = $_FILES['backImage']['size'];
        $backImageType = $_FILES['backImage']['type'];



            



        if(empty($avatarName)) {

            $formErros[] = 'Front National ID Image is Required';

        }


        if (empty($backImageName)) {

            $formErros[] = 'Back National ID Image is Required';


        }

            
            
        
            



            if(empty($formErros)) {


                
                 $avatarLast = rand(0 , 100000000) . '_' . $avatarName;

                 $backImageLast = rand(0 , 100000000) . '_' . $backImageName;
        
                move_uploaded_file($avatarTempName , 'images/contact/' . $avatarLast);
            
                move_uploaded_file($backImageTempName , 'images/contact/' . $backImageLast);

                
    

                
            $stmt = $db->prepare('INSERT INTO test(name,email,phone,status,day,organization,commers,front,back,voucher) VALUES(?,?,?,?,?,?,?,?,?,?)');


                $stmt->execute(array(
                    $name , $email , $phone, $status,$day , $organization , $commers , $avatarLast , $backImageLast , $random
                ));


                if($stmt->rowCount() > 0) {
                    mail('registration@ieeeypegypt.org' , '[EED Event] Entity '. $organization . ' Request' , 'For entities, <br />
                                                                Dear visits team, <br />
Please review this visit request and reply to the contact person whether with acceptance or adding the visit to the waiting list. <br /> <br />
        Organizatin Name : "'.$organization.'" <br />
        Number of Commers : "'.$commers.'" <br />
        Coming Day : "'.$day.'" <br />
        Voucher Number : "'.$random.'" <br />

'  , 'Content-type:text/html;charset=utf-8' . '\r\n' . 'EED Team');


                    $success = '<div class="alert alert-success text-center">Thanks For Your Registration , You will Get an Confiramtion mail if your Request is ok</div>';

                } 

        }


    }





    }







?>



<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>EED Visitor Registration</title>
        
        <link type="text/css" rel="stylesheet" href="https://bootswatch.com/readable/bootstrap.min.css" />
    <!--<link href="https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i" rel="stylesheet">-->
        <link type="text/css" rel="stylesheet" href="style.css?v1.4" />
        <link rel="shortcut icon" href="images/EED Logo 2017.png" />
    
    </head>
    <body>
    <a href="eed.eg">
        <img src="images/LOGOS PNG.png" class="img-responsive" alt="EED Logo" />
    </a>
    <div class="container">
    
        <div class="col-md-8 col-md-offset-2">
        <img src="images/visitor.png" alt="Visitor Registration" class="img-responsive visit-img"/>
            
            <!--<h1 class="text-center">Registration Form</h1>-->
            <?php 
                if(isset($success)) {
                    
                    echo $success;

                } else if(isset($formErros)) {

                    foreach($formErros as $singleError) {
                        echo '<div class="alert alert-danger text-center">'.$singleError.'</div>';
                    }

                }
            ?>
           
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="form-group form__register" enctype="multipart/form-data">
                
                <div class="form-group">
                    <select class="form-control status" name="registerStat" id="registerStat" required>
                        <option value="Entitty">Entity-organized visit</option>
                    </select>
                </div>

                <div class="form-group">
                    <input class="form-control" name="username" placeholder="Name" type="text" value="<?php if(isset($name)) { echo $name; } ?>"/>
                    <div class="alert alert-danger custom-alert">
                        
                    </div>
                </div>
                <div class="form-group">
                    <input class="form-control" name="email" placeholder="Email" type="email" value="<?php if(isset($email)) { echo $email; } ?>"/>
                    <div class="alert alert-danger custom-alert">

                    </div>
                </div>
                <div class="form-group">
                    <input class="form-control" name="phone" placeholder="Phone" type="text" value="<?php if(isset($phone)) { echo $phone; } ?>"/>
                    <div class="alert alert-danger custom-alert">
                        
                    </div>

                </div>
                
                <div class="entitty">
                    <div class="form-group">
                    <select class="form-control" name="day">
                        <option value="11">Day 1 : 11<sup>th</sup> of Sep.</option>
                        <option value="12">Day 2 : 12<sup>th</sup> of Sep.</option>
                    </select>
                </div>
                    <div class="form-group">
                        <input class="form-control" type="text" name="organization" placeholder="Organization" value="<?php if(isset($organization)) { echo $organization; } ?>"/>
                          <div class="alert alert-danger custom-alert">
                            Organization Can't Be Empty
                        </div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="number" name="commers" placeholder="Number Of Comers (Max. 50 Person)" value="<?php if(isset($commers)) { echo $commers; } ?>"/>
                          <div class="alert alert-danger custom-alert">
                            
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Upload Your Front Image National ID</label>
                        <input class="form-control" type="file"  name="avatar" enctype="multipart/data"/>
     
                     
                    </div>
                    <div class="form-group">
                        <label>Upload Your Back Image Of National ID</label>
                        <input class="form-control" type="file"  name="backImage" enctype="multipart/data"/>
    
                     
                     
                    </div>
                </div>

                <button class="btn btn-success submit-btn" name="submit" type="submit">Submit</button>


            </form>


            
        
        
        </div>
    </div>    


    












        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js?v2.777"></script>
    </body>







</html>