class AddOptionsToPoll < ActiveRecord::Migration[6.0]
  def change
    add_column :polls, :options, :string
  end
end
