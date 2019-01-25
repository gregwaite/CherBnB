class Api::SessionsController < ApplicationController
  def show
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json:["Invalid email/password -Cher"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["As far as I can tell, nobody is signed in. Can't sign out if you don't sign in -Cher"], status: 404
    end
  end

end