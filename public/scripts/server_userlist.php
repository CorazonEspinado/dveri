<?php

/*
 * Example PHP implementation used for the index.html example
 */

// DataTables PHP library
include( "../editor/php/DataTables.php" );

// Alias Editor classes so they are easy to use
use
    DataTables\Editor,
    DataTables\Editor\Field,
    DataTables\Editor\Format,
    DataTables\Editor\Mjoin,
    DataTables\Editor\Options,
    DataTables\Editor\Upload,
    DataTables\Editor\Validate;

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'users' )
    ->fields(
        Field::inst( 'name' )->validator( 'Validate::notEmpty' ),
        Field::inst( 'surname' )->validator( 'Validate::notEmpty' ),
        Field::inst( 'login' ),
        Field::inst( 'email' ),
        Field::inst( 'struktura' )

    )
    ->process( $_POST )
    ->json();