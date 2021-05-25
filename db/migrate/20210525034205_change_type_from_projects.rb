class ChangeTypeFromProjects < ActiveRecord::Migration[6.0]
  def change
    def self.up
      add_column(:projects, :project_type, :string, null: false, default: "") unless Project.column_names.include?('project_type')
    end
  
    def self.down
      remove_column(:projects, :type) if Project.column_names.include?('type')
    end
  end
end
