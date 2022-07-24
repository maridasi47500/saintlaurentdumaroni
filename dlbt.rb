['home','print','mail','fontplus','fontmoins','share'].each do |h|
`(cd "#{Rails.root.to_s}/public/photo" && wget "https://www.saintlaurentdumaroni.fr/photo/bt_#{h}.png")`
end
