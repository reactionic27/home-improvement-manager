# frozen_string_literal: true

class LoginController < ApplicationController
  layout "login"

  def index
    users = User.all
    projects = Project.all
    @projects_props = { projects: projects, users: users }
  end
end
