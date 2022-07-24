# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
    protect_from_forgery except: [:new,:create]
  # GET /resource/sign_up
   def new
     @user=User.new
            render :subscription
   end
    

  # POST /resource
   def create
     @user=User.new(user_params)
            if @user.save
            @user.updatelastsignin
                bypass_sign_in(@user)
    redirect_back(fallback_location: root_path)

                else
                p @user.errors
render :subscription
            end
            
   end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected
    def user_params
        params.permit(:subaction,:commande_a_regler, :esc_identity, :a_login, :a_password, :a_password2, :a_visibilite, :a_pseudo, :a_prenom, :a_nom, :a_email,:a_abo_newsletter)
    end    

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
