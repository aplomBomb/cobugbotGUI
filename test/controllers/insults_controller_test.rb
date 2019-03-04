require 'test_helper'

class InsultsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get insults_index_url
    assert_response :success
  end

  test "should get show" do
    get insults_show_url
    assert_response :success
  end

  test "should get new" do
    get insults_new_url
    assert_response :success
  end

  test "should get edit" do
    get insults_edit_url
    assert_response :success
  end

end
