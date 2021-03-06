<?php
/*
  Controller name: Boundless Map Controller
  Controller description: JSON API for fetching the different slides
*/

class JSON_API_Map_Point_Controller
{

  public function get_map_points()
  {
    global $json_api;

    $points = $json_api->introspector->get_posts( array(
      'post_type' => array( 'points' )
    ));

    foreach ( $points as $point )
    {
      $result = new stdClass();
      $result->title = $point->title;
      $result->text = $point->excerpt;
      $result->image = apply_filters('wp_prepare_attachment_for_js', apply_filters( 'remove_cms', wp_get_attachment_image_src( get_post_thumbnail_id( $point->id ), 'original' )) );
      $result->coordinate = array(
        "latitude"  => (double) get_post_meta( $point->id, '_latitude', true ),
        "longitude" => (double) get_post_meta( $point->id, "_longitude", true )
      );
      $result->cta = array(
        'text'=> get_post_meta($point->id, 'cta_text', true),
        'url' => get_post_meta($point->id, 'cta_url', true)
      );

      $results[] = $result;
    }

    // TODO: This works best with Backbone but isn't the JSON API method
    wp_send_json( $results );

  }

}
