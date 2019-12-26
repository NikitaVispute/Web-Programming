<?php

$url = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$path = parse_url($url, PHP_URL_PATH);
$pathComponents = explode("/", trim($path, "/"));

// Create connection
$con = mysqli_connect('localhost', 'root', 'root','hw4');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

if(sizeof($pathComponents) == 2) {
  $id = $pathComponents[1];

  $query = 'SELECT * FROM books
  where books.ISBN ='.$id;
  $data = mysqli_query($con, $query) ;
  $json_response = array();
  while ($row = mysqli_fetch_array($data)) {
    $p = array(
                "ISBN" => $row['ISBN'],
                "Title" => $row['Title'],
                "Author(s)" => $row['Author'],
                "Price" => $row['Price'],
                "Category" => $row['Category']
                );
    array_push($json_response,$p);
  }
  echo json_encode($json_response);
}

else {
  $query = 'SELECT * FROM books';
  $data = mysqli_query($con, $query) ;
  $json_response = array();
  while ($row = mysqli_fetch_array($data)) {
    $p = array(
                "ISBN" => $row['ISBN'],
                "Title" => $row['Title'],
                "Author(s)" => $row['Author'],
                "Price" => $row['Price'],
                "Category" => $row['Category']
                );
    array_push($json_response,$p);
  }
  echo json_encode($json_response);
}
?>
