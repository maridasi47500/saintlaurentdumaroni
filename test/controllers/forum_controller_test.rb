require 'test_helper'

class ForumControllerTest < ActionDispatch::IntegrationTest
  test "should get voirchambre" do
    get forum_voirchambre_url
    assert_response :success
  end

end
