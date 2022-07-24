function selectDest(id, label)
	{			
	var parent = $('#encapse_inputs');
	var doublon = false;
	var spans = parent.find("span");
	
	spans.each(function() {
		var hiddens = $(this).find('input');
		if(hiddens.eq(0).val() == id)	doublon = true;
		});
		
	var nb_span = spans.length;
	
	var loadings = $("div.loading");
	
	if(nb_span < 15 && doublon == false && loadings.length == 0)
		{	
		var texte = label;

		texte = texte.replace(/&(lt|gt);/g, function (strMatch, p1){	return (p1 == "lt")? "<" : ">"; });
		texte = texte.replace(/<\/?[^>]+(>|$)/g, "");
		texte = texte.replace(/^\texte+/, '').replace(/\texte+$/, '');
		
		var span = $('<span style="width: auto; padding: 0 5px">' + texte + '&nbsp;</span>\n');
		
		var hidden = $('<input type="hidden" name="a_destinataires[]" value="' + id + '" />\n');
		
		var del = $('<img style="cursor: pointer; vertical-align: middle; margin-left: 2px" src="/_images/icones/delete.gif" width="10" height="11" />\n');
		del.click(function() { $(this).parent().remove(); });
	
		$('#a_destinataires').val('');
		
		span.append(hidden);
		span.append(del);
		$('#a_destinataires').before(span);
		}
	
	return false;
	}
	
function checkDest(id)
	{
	if($("#" + id).length)
		{
		if($("#" + id).find('span').length == 0)	{ $("#" + id).addClass("field_error"); $('#a_destinataires').css("background", 'transparent'); return false; }
		
		return true;
		}
	}
	
function del_thread(id)
	{
	var confirmation = confirm(confirm_text);
	
	if(confirmation)
		{
		$('#form_' + id).submit();
		}
	}
	
function preview_thread(rootzine_rel)
	{
	var message = $('#a_message').val();
	if($('#preview').length)	$('#preview').html('');
	
	if(rootzine_rel == null)	rootzine_rel = '/';
	else				rootzine_rel += '/';
	 
	if(message != "")
		{
		var link_param = { action: "social", ajax_preview: 1, mess: message };
		
		$('#preview').addClass("loading").css('height', '120px').show();
		$('#preview').load(rootzine_rel, link_param, function() { $('#preview').css('height', '100%').removeClass('loading'); });
		}
	}

function validate_form()
	{
	if(checkDest('encapse_inputs'))		return test_vide('a_sujet', 1, 'field_error'); 
	else 					return false;
	}
	
function dropdown_menu(id)
	{
	var menu = document.getElementById(id);
	
	if(menu)
		{
		var li = menu.getElementsByTagName('li');
		
		for(var i=0;i<li.length;i++)
			{
			if(li[i])
				{
				li[i].onmouseover = function() { 
					var menu_id = this.id.replace('li_', '');
					var submenu = document.getElementById('ssmenu_' + menu_id);
					if(submenu)	submenu.style.display = 'block';
					};
							
				li[i].onmouseout = function() { 
					var menu_id = this.id.replace('li_', '');
					var submenu = document.getElementById('ssmenu_' + menu_id);
					if(submenu)	submenu.style.display = 'none';
					};
				}
			}
		}
	}

function menu_social_login(id_menu, elem)
	{
	var parent = elem.parentNode;
	
	if(parent.className.match("liens "))	{ parent.className = parent.className.replace("liens ", "liens_selected "); }
	else					{ parent.className = parent.className.replace("liens_selected ", "liens "); }
	
	show_hide(null, id_menu); 
	this.blur();
	}	