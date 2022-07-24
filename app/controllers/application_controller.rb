class ApplicationController < ActionController::Base
before_action :set_calendar
  def set_calendar
SigninJob.perform_now(current_user)
if params[:yy] && params[:dd] && params[:mm]
@selectdate=Date.strptime((params[:yy]+'/'+params[:mm]+'/'+params[:dd]), '%Y/%m/%d')
p @selectdate
else
@selectdate=Date.today
end
p "select date"
p @selectdate
@year=@selectdate.year.to_i
@month=@selectdate.month.to_i
@date=Date.new(@year,@month,1)
@date=@date.beginning_of_month 
@debut=@date.monday
@fin=@date.end_of_month.sunday       
@semaines=(@debut..@fin).to_a.map{|h|h.month.to_i == @month.to_i ? h : nil}.each_slice(7).to_a
@nextmonth= (@month < 12 ? (@month + 1) : 1)
@nextyear= (@month < 12 ? @year : (@year + 1))
@prevmonth= (@month > 1 ? (@month - 1) : 12)
@prevyear= (@month > 1 ? @year : @year - 1)
  end
end
