# frozen_string_literal: true

class LoginController < ApplicationController
  layout "login"

  def index
    projects = Project.all
    @projects_props = { projects: projects }
  end
end
