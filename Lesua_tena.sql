create database lesua_tena
create table Contraception
(
c_id int unique identity,
c_Name varchar(30),
Rec_Age int ,
HealthCondition tinyint,
ChildrenInterval varchar(30), 
SexInterval varchar(30), 
SexPartners int,
StdProtection tinyint,
AccurateUse tinyint,
primary key(C_id)
)
insert into Contraception
values ('Female Condom', ' ', '1', ' ', ' ', ' ', '1', '1')
select * from Contraception

insert into Contraception
values ('Intrauterin Devices', '0', '1', 'none', 'Daily', '1', '0', '0')
insert into Contraception
values ('Sterilization', '21', '1', 'i dont want child', 'daily', '10', '0', '0')
update Contraception
set 
  ChildrenInterval ='None'
  where c_id= 2

  create procedure Above21Nochilderen
  as 
  begin
  select c_Name from Contraception 
  where Rec_Age = 21 and childrenInterval= 'i dont want child'

  end 
  exec Above21Nochilderen

create procedure stdprotection
 as 
 begin
 select c_name from Contraception
 where StdProtection=1
 end

 exec stdprotection

 create procedur