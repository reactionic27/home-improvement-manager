# frozen_string_literal: true

class LoginController < ApplicationController
  layout "login"

  def index
    @login_props = {}
  end
end
