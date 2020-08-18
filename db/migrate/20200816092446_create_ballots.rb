class CreateBallots < ActiveRecord::Migration[6.0]
  def change
    create_table :ballots do |t|
      t.belongs_to :user
      t.belongs_to :poll
      t.integer :voted_option

      t.timestamps
    end
  end
end
