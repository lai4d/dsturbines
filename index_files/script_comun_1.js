function cambia_estado (objeto)
{
      try
      {
            var dir_des = objeto.childNodes;
            var i;
            if (objeto.getAttribute('at_estado') == 'estado_a')
            {
                for (i = 0; i < dir_des.length; i++)
                {
                    try
                    {
                        if (dir_des.item(i).getAttribute('at_clase') == 'a')
                        {
                        dir_des.item(i).style.display='none';
                        }  
                        if (dir_des.item(i).getAttribute('at_clase') == 'b')
                        {
                        dir_des.item(i).style.display='inline';
                        }
                    }
                    catch(err){}  
                }
                objeto.setAttribute('at_estado', 'estado_b');
            }
            else
            {
                for (i = 0; i < dir_des.length; i++)
                {
                    try
                    {
                        if (dir_des.item(i).getAttribute('at_clase') == 'b')
                        {
                        dir_des.item(i).style.display='none';
                        }  
                        if (dir_des.item(i).getAttribute('at_clase') == 'a')
                        {
                        dir_des.item(i).style.display='inline';
                        }  
                    }
                    catch(err){}
                }
                objeto.setAttribute('at_estado', 'estado_a');
            }
      }
      catch(err){}
}
