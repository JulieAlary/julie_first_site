require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  
  def setup
  	@base_title = "JulieFirstSite"
  end

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "JulieFirstSite"
  end

end
