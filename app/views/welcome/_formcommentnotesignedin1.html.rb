<%=form_with scope: "", model:comment, url: mynote_path(category: "_b", titre: params[:titre], id: note.id, com: "", anchor: "last_comment"), html: {id: "form_comment", "accept-charset"=>"UTF-8"} do |form|%>
					 <div class="infos encadre">
						 <input type="hidden" name="action" value="breve" />
						 <input type="hidden" name="id_article" value="46798734" />
						 <input type="hidden" name="paa" value="" />
						 <input type="hidden" name="zaa" value="" />
						 <input type="hidden" name="ajout_commentaire" value="oui" />
						 <input type="hidden" name="type_enreg" value="breve" />
						 <input type="hidden" name="type" value="" />
						 <div class="form">
						 <div class='message' style='float:left; margin-left: 3px'>
						 Connecté en tant que <a class='infos' href="/social/<%=current_user.id%>/" onclick="window.open(this.href, '_blank'); return false"><%=comment.user.pseudo%></a>
						 <a style='display:block; margin-top: 5px;' class='infos' href="/logout/">Se déconnecter</a>
						 </div>
						 <div class='clear'></div>
				 <div id="inputs">
					<div id="div_a_pseudo" style="">
<label style="display: none">Nom * :</label>
<div class="inputrow" style="display: none">
	 <%=form.text_field "a_pseudo", class: "button", onfocus: "del_error(this.id)", id: "a_pseudo", readonly: "readonly", maxlength: "250" %>
	 <div id="error_a_pseudo" class="error"></div>
</div>
<div class="inforow"> </div>
</div>
<div class="break"></div>
					<div id="div_a_email" style="">
<label style="display: none">Adresse email (non publiée) * :</label>
<div class="inputrow" style="display: none">
<%=form.text_field "a_email", class: "button", onfocus: "del_error(this.id)", id: "a_email", maxlength: "120" %>
	 <div id="error_a_email" class="error"></div>
</div>
<div class="inforow"> </div>
</div>
<div class="break"></div>
					<div id="div_a_url" style="">
<label style="display: none">Site web :</label>
<div class="inputrow" style="display: none">
<%=form.text_field "a_url", class: "button", onfocus: "del_error(this.id)", id: "a_url" %>
	 <div id="error_a_url" class="error"></div>
</div>
<div class="inforow"> </div>
</div>
<div class="break"></div>
				 </div>
				 <label style="display:block;margin-bottom:3px">Commentaire * :</label>
				 <div class="inputrow" style="padding-top:5px">
                                <%=form.text_area "a_commentaire", id: "a_commentaire", class: "button", onfocus: "del_error('a_commentaire')",  rows: "8"%>
					 <div id="error_a_commentaire" class="error"></div>
				 </div>
			 <div class="clear"></div>
				 <div id="notify">
					<div class="radiorow">
        <%=form.check_box "a_notify", {id: "a_notify"}, "yes", "no" %> 
<label for="a_notify" class="champ" style="display:inline">Me notifier l'arrivée de nouveaux commentaires</label><br/>
		 <div id="error_a_notify" class="error"></div>
</div>
<div class="break"></div>
				 </div>
						 </div>
						 <div class="submit" style="margin:10px 0">
							 <input type="submit" value="Proposer" class="button2" />
						 </div>
					 </div>
				 <%end%>