PROCEDURE Dot_product(v1,v2 : ARRAY_OF INTEGER[3], VAR ps:FLOAT)
VAR
    i,j:INTEGER;
BEGIN
   ps:=0;
    FOR i FROM 0 TO v1.length -1 STEP 1  DO
        ps:=ps+v1[i]*v2[i];
    END_FOR
END

/****************************************/
FUNCTION Dot_product(v1,v2 : ARRAY_OF INTEGER[3]) : FLOAT
VAR
       i,j,ps:INTEGER;
       ps:FLOAT;
BEGIN
     FOR i FROM 0 TO v1.length -1 STEP 1 DO
        ps:=ps+v1[i]*v2[i];
    END_FOR
    RETURN ps ;
END
/*******************************************************/
ALGORITHM orthogonal_Procedure
VAR
    v1,v2 : ARRAY_OF INTEGER[3];
    ps:=FLOAT;
  

BEGIN
  write("give vector 1");
    Read(v1);
    write("give vector 2");
    Read(v2);
   Dot_product(v1,v2,ps)
   write(ps);
   IF (ps=0) THEN
       write(vectors are orthogonal)
   ELSE
       write( vectors are not orthogonal)
   END_IF
END
/**************************************/
ALGORITHM orthogonal_Function
VAR
     v1,v2 : ARRAY_OF INTEGER[3];
    ps:=FLOAT;
BEGIN
    write("give vector 1");
    Read(v1);
    write("give vector 2");
    Read(v2);
   ps:=Dot_product(v1,v2)
  
   IF (ps=0) THEN
       write(vectors are orthogonal)
   ELSE
       write( vectors are not orthogonal)
   END_IF
END