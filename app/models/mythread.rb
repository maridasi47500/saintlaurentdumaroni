class Mythread < ApplicationRecord
self.table_name="threads"
has_many :messages, foreign_key: "thread_id"
def self.nb_unread
select('distinct threads.id, threads.*, messages.vues, messages.user_id').joins("left join messages on messages.thread_id = threads.id and cast(messages.vues as int) = 0").group('messages.id').length
end
def self.nb_read
select('distinct threads.id, threads.*, messages.vues, messages.user_id').joins("left join messages on messages.thread_id = threads.id and cast(messages.vues as int) > 0").group('messages.id').length
end
def self.messagesthreads
joins('left join messages m1 on m1.thread_id = threads.id').joins('left join messages m2 on m1.thread_id = m2.thread_id')
end
def self.unread
select('distinct threads.id, threads.*, messages.vues, messages.user_id').joins("left join messages on messages.thread_id = threads.id and cast(messages.vues as int) = 0").group('threads.id')
end
def self.read
select('distinct threads.id, threads.*, messages.vues, messages.user_id').joins("left join messages on messages.thread_id = threads.id and cast(messages.vues as int) > 0").group('threads.id')
end
end
